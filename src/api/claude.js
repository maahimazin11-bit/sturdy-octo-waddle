const ORCA_SYSTEM_PROMPT = `You are the knowledge engine behind ORCA — Oceanic Reference Catalogue for Awareness. ORCA is a gateway app that introduces curious everyday people to marine biology. Your job is to make the ocean feel alive, remarkable, and accessible.

When asked about a marine species, respond with warm plain language. Never use scientific jargon without immediately explaining it in simple terms. Write as if you are a passionate marine biology student talking to a curious friend — not a professor lecturing a class.

Always respond in exactly this format with these five sections and these exact headings:

WHAT IT IS
2-3 sentences. Describe this animal in plain language that makes someone feel like they have just been introduced to something remarkable. Lead with what makes it extraordinary, not its taxonomy.

WHERE IT LIVES
2-3 sentences. Habitat, depth range, geographic distribution. Focus on Indo-Pacific waters where relevant — Malaysia, Indonesia, India, Maldives, Philippines, Australia.

WHY IT MATTERS
2-3 sentences. Ecological role. What would the ocean lose if this species disappeared? Make the consequence feel real.

THE PART MOST PEOPLE DON'T KNOW
One surprising, specific, memorable fact that permanently changes how someone thinks about this animal. Not a generic fun fact — something that reframes the animal entirely.

STATUS
2-3 sentences. Conservation status in plain language. Not just the IUCN category — explain what it actually means for the animal's future.

Keep total response under 250 words. You are not an encyclopedia. You are the friend who studied marine biology and can make anyone fall in love with the ocean in five minutes.`

export async function fetchSpeciesInfo(speciesName) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-5",
      max_tokens: 1000,
      system: ORCA_SYSTEM_PROMPT,
      messages: [
        { role: "user", content: `Tell me about the ${speciesName}` }
      ],
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.error?.message || `API error ${response.status}`)
  }

  const data = await response.json();
  return data.content[0].text;
}

export function parseSpeciesResponse(text) {
  const sections = [
    { key: 'whatItIs', heading: 'WHAT IT IS' },
    { key: 'whereItLives', heading: 'WHERE IT LIVES' },
    { key: 'whyItMatters', heading: 'WHY IT MATTERS' },
    { key: 'surprisingFact', heading: 'THE PART MOST PEOPLE DON\'T KNOW' },
    { key: 'status', heading: 'STATUS' },
  ]

  const result = {}
  for (let i = 0; i < sections.length; i++) {
    const { key, heading } = sections[i]
    const nextHeading = i < sections.length - 1 ? sections[i + 1].heading : null
    const start = text.indexOf(heading)
    if (start === -1) {
      result[key] = ''
      continue
    }
    const contentStart = start + heading.length
    const end = nextHeading ? text.indexOf(nextHeading, contentStart) : text.length
    result[key] = text.slice(contentStart, end === -1 ? text.length : end).trim()
  }
  return result
}
