import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoryBrowse from './pages/CategoryBrowse'
import SpeciesList from './pages/SpeciesList'
import SpeciesDetail from './pages/SpeciesDetail'
import SearchResults from './pages/SearchResults'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kingdom/:kingdom" element={<CategoryBrowse />} />
        <Route path="/kingdom/:kingdom/category/:categoryId" element={<SpeciesList />} />
        <Route path="/species/:id" element={<SpeciesDetail />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}
