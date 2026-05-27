export const kingdoms = [
  { id: 'animal', name: 'Animal Kingdom', icon: '🐠' },
  { id: 'plant', name: 'Plant Kingdom', icon: '🌿' },
]

export const categories = {
  animal: [
    { id: 'fish', name: 'Fish', icon: 'fish', count: 10 },
    { id: 'sharks-rays', name: 'Sharks & Rays', icon: 'shark', count: 8 },
    { id: 'marine-mammals', name: 'Marine Mammals', icon: 'whale', count: 6 },
    { id: 'reptiles', name: 'Reptiles', icon: 'turtle', count: 6 },
    { id: 'invertebrates', name: 'Invertebrates', icon: 'jellyfish', count: 8 },
    { id: 'coral-reef', name: 'Coral & Reef', icon: 'coral', count: 6 },
  ],
  plant: [
    { id: 'seagrass', name: 'Seagrasses', icon: 'seagrass', count: 1 },
    { id: 'mangroves', name: 'Mangroves', icon: 'mangrove', count: 1 },
    { id: 'algae', name: 'Algae & Kelp', icon: 'algae', count: 4 },
  ],
}

export const species = {
  fish: [
    { id: 'clownfish', common: 'Clownfish', scientific: 'Amphiprioninae', teaser: 'The reef\'s most famous resident, forever bound to its anemone.' },
    { id: 'blue-tang', common: 'Blue Tang', scientific: 'Paracanthurus hepatus', teaser: 'Vivid blue surgeonfish with a hidden scalpel at its tail.' },
    { id: 'lionfish', common: 'Lionfish', scientific: 'Pterois', teaser: 'Spectacular and venomous — a reef predator wrapped in warning colours.' },
    { id: 'napoleon-wrasse', common: 'Napoleon Wrasse', scientific: 'Cheilinus undulatus', teaser: 'The gentle giant of coral reefs, ancient and unhurried.' },
    { id: 'bumphead-parrotfish', common: 'Bumphead Parrotfish', scientific: 'Bolbometopon muricatum', teaser: 'It literally eats coral and poops out white sand beaches.' },
    { id: 'mandarin-fish', common: 'Mandarin Fish', scientific: 'Synchiropus splendidus', teaser: 'Possibly the most colourful vertebrate on Earth.' },
    { id: 'seahorse', common: 'Seahorse', scientific: 'Hippocampus', teaser: 'The only animal where the male becomes pregnant.' },
    { id: 'moorish-idol', common: 'Moorish Idol', scientific: 'Zanclus cornutus', teaser: 'An iconic reef fish that almost never survives in captivity.' },
    { id: 'barracuda', common: 'Barracuda', scientific: 'Sphyraena', teaser: 'Torpedo-shaped apex predator, terrifying up close.' },
    { id: 'trevally', common: 'Trevally', scientific: 'Caranx ignobilis', teaser: 'A powerful pack hunter that dominates open-water reefs.' },
  ],
  'sharks-rays': [
    { id: 'whale-shark', common: 'Whale Shark', scientific: 'Rhincodon typus', teaser: 'The ocean\'s largest fish — and it only eats tiny plankton.' },
    { id: 'blacktip-reef-shark', common: 'Blacktip Reef Shark', scientific: 'Carcharhinus melanopterus', teaser: 'The quintessential shallow-reef shark, elegant and ever-present.' },
    { id: 'whitetip-reef-shark', common: 'Whitetip Reef Shark', scientific: 'Triaenodon obesus', teaser: 'Rests on the seafloor all day, hunts through reef caves at night.' },
    { id: 'hammerhead-shark', common: 'Hammerhead Shark', scientific: 'Sphyrna lewini', teaser: 'Its bizarre head is actually a finely tuned sensory instrument.' },
    { id: 'oceanic-manta-ray', common: 'Oceanic Manta Ray', scientific: 'Mobula birostris', teaser: 'Wingspan of seven metres, brain bigger than any other fish.' },
    { id: 'blue-spotted-stingray', common: 'Blue-spotted Stingray', scientific: 'Neotrygon kuhlii', teaser: 'Jewel-spotted and venomous — a hidden gem of the sandy reef floor.' },
    { id: 'zebra-shark', common: 'Zebra Shark', scientific: 'Stegostoma tigrinum', teaser: 'Born with stripes, grows into spots — and can reproduce without a mate.' },
    { id: 'nurse-shark', common: 'Nurse Shark', scientific: 'Ginglymostoma cirratum', teaser: 'The ocean\'s most docile shark, often found napping in piles.' },
  ],
  'marine-mammals': [
    { id: 'orca', common: 'Orca', scientific: 'Orcinus orca', teaser: 'Not a whale — the largest dolphin, and the ocean\'s apex predator.' },
    { id: 'humpback-whale', common: 'Humpback Whale', scientific: 'Megaptera novaeangliae', teaser: 'Composes the most complex songs in the animal kingdom.' },
    { id: 'spinner-dolphin', common: 'Spinner Dolphin', scientific: 'Stenella longirostris', teaser: 'Leaps and spins for reasons science still hasn\'t fully explained.' },
    { id: 'dugong', common: 'Dugong', scientific: 'Dugong dugon', teaser: 'The real mermaid — ancient mariners mistook these for half-human creatures.' },
    { id: 'irrawaddy-dolphin', common: 'Irrawaddy Dolphin', scientific: 'Orcaella brevirostris', teaser: 'Chubby-cheeked river dolphin that spits water to herd fish.' },
    { id: 'indo-pacific-bottlenose-dolphin', common: 'Indo-Pacific Bottlenose Dolphin', scientific: 'Tursiops aduncus', teaser: 'Smarter than a dog, social as a human, and deeply misunderstood.' },
  ],
  reptiles: [
    { id: 'green-sea-turtle', common: 'Green Sea Turtle', scientific: 'Chelonia mydas', teaser: 'Returns to the exact beach where it was born, decades later.' },
    { id: 'hawksbill-sea-turtle', common: 'Hawksbill Sea Turtle', scientific: 'Eretmochelys imbricata', teaser: 'Eats sponges that would otherwise smother coral reefs.' },
    { id: 'leatherback-sea-turtle', common: 'Leatherback Sea Turtle', scientific: 'Dermochelys coriacea', teaser: 'Dives deeper than most submarines and has no hard shell.' },
    { id: 'olive-ridley-turtle', common: 'Olive Ridley Turtle', scientific: 'Lepidochelys olivacea', teaser: 'Thousands nest simultaneously in one of nature\'s great spectacles.' },
    { id: 'banded-sea-krait', common: 'Banded Sea Krait', scientific: 'Laticauda colubrina', teaser: 'Venom ten times stronger than a cobra — yet remarkably docile.' },
    { id: 'yellow-bellied-sea-snake', common: 'Yellow-bellied Sea Snake', scientific: 'Hydrophis platurus', teaser: 'The most widely distributed reptile on Earth, never needing to touch land.' },
  ],
  invertebrates: [
    { id: 'crown-of-thorns-starfish', common: 'Crown of Thorns Starfish', scientific: 'Acanthaster planci', teaser: 'Beautiful predator that can single-handedly destroy a coral reef.' },
    { id: 'giant-clam', common: 'Giant Clam', scientific: 'Tridacna gigas', teaser: 'Farms its own algae like a solar-powered living reef.' },
    { id: 'mantis-shrimp', common: 'Mantis Shrimp', scientific: 'Stomatopoda', teaser: 'Punches with the force of a bullet and sees colours we can\'t imagine.' },
    { id: 'blue-ringed-octopus', common: 'Blue-ringed Octopus', scientific: 'Hapalochlaena lunulata', teaser: 'Golf-ball-sized animal carrying enough venom to kill 26 humans.' },
    { id: 'nudibranch', common: 'Nudibranch', scientific: 'Nudibranchia', teaser: 'Naked sea slugs that are among the most flamboyant creatures alive.' },
    { id: 'moon-jellyfish', common: 'Moon Jellyfish', scientific: 'Aurelia aurita', teaser: 'No brain, no heart, no blood — yet one of Earth\'s most successful animals.' },
    { id: 'coconut-crab', common: 'Coconut Crab', scientific: 'Birgus latro', teaser: 'The world\'s largest land invertebrate can crack open a coconut.' },
    { id: 'peacock-mantis-shrimp', common: 'Peacock Mantis Shrimp', scientific: 'Odontodactylus scyllarus', teaser: 'The most visually complex creature known — sees 16 types of colour receptors.' },
  ],
  'coral-reef': [
    { id: 'staghorn-coral', common: 'Staghorn Coral', scientific: 'Acropora cervicornis', teaser: 'Fastest-growing coral that forms the backbone of Caribbean reefs.' },
    { id: 'brain-coral', common: 'Brain Coral', scientific: 'Diploria labyrinthiformis', teaser: 'Can live for 900 years and looks exactly like a human brain.' },
    { id: 'table-coral', common: 'Table Coral', scientific: 'Acropora hyacinthus', teaser: 'Grows flat like a table to maximise sunlight in the shallows.' },
    { id: 'soft-coral', common: 'Soft Coral', scientific: 'Alcyonacea', teaser: 'Swaying gardens that shelter hundreds of species in their branches.' },
    { id: 'sea-fan', common: 'Sea Fan', scientific: 'Gorgonia ventalina', teaser: 'Purple lace coral that filters plankton from passing currents.' },
    { id: 'coral-bleaching', common: 'Coral Bleaching', scientific: 'Thermal Stress Phenomenon', teaser: 'When rising temperatures turn reefs from a rainbow to a ghost.' },
  ],
  seagrass: [
    { id: 'seagrass', common: 'Seagrass', scientific: 'Posidonia oceanica', teaser: 'Ancient underwater meadows that store more carbon than rainforests.' },
  ],
  mangroves: [
    { id: 'mangrove', common: 'Mangrove', scientific: 'Rhizophora apiculata', teaser: 'The ocean\'s nursery — where half the world\'s commercial fish species begin life.' },
  ],
  algae: [
    { id: 'giant-kelp', common: 'Giant Kelp', scientific: 'Macrocystis pyrifera', teaser: 'Grows 60 centimetres a day, creating underwater forests taller than trees.' },
    { id: 'sea-lettuce', common: 'Sea Lettuce', scientific: 'Ulva lactuca', teaser: 'Bright green seaweed found on every coastline on Earth.' },
    { id: 'coralline-algae', common: 'Coralline Algae', scientific: 'Corallinales', teaser: 'Pink stone-like algae that cements reefs together from the inside.' },
    { id: 'sargassum', common: 'Sargassum', scientific: 'Sargassum muticum', teaser: 'Floating forests that shelter a unique ocean ecosystem in open water.' },
  ],
}

export const kingdomCategories = {
  animal: ['fish', 'sharks-rays', 'marine-mammals', 'reptiles', 'invertebrates', 'coral-reef'],
  plant: ['seagrass', 'mangroves', 'algae'],
}

export function searchSpecies(query) {
  const q = query.toLowerCase().trim()
  if (!q) return []
  const results = []
  for (const [categoryId, speciesList] of Object.entries(species)) {
    for (const s of speciesList) {
      if (
        s.common.toLowerCase().includes(q) ||
        s.scientific.toLowerCase().includes(q) ||
        s.teaser.toLowerCase().includes(q)
      ) {
        results.push({ ...s, categoryId })
      }
    }
  }
  return results
}

export function getSpeciesById(id) {
  for (const [categoryId, speciesList] of Object.entries(species)) {
    const found = speciesList.find(s => s.id === id)
    if (found) return { ...found, categoryId }
  }
  return null
}

export function getCategoryById(id) {
  for (const cats of Object.values(categories)) {
    const found = cats.find(c => c.id === id)
    if (found) return found
  }
  return null
}
