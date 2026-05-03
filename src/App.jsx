import Home from './pages/Home'
import NorthAmerica from './pages/NorthAmerica'
import Europe from './pages/Europe'
import Asia from './pages/Asia'
import { Route, Routes } from 'react-router-dom'

// and in your routes:
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home title="Country Explorer" />} />
      <Route path="/NorthAmerica" element={<NorthAmerica title="North America" />} />
      <Route path="/Europe" element={<Europe title="Europe" />} />
      <Route path="/Asia" element={<Asia title="Asia" />} />
    </Routes>
  )
}