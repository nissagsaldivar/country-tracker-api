import Home from './pages/Home'
import NorthAmerica from './pages/NorthAmerica'
import Europe from './pages/Europe'
import Asia from './pages/Asia'
import Africa from './pages/Africa'
import SouthAmerica from './pages/SouthAmerica'
import { Route, Routes } from 'react-router-dom'

// add your routes:
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home title="Country Explorer" />} />
      <Route path="/NorthAmerica" element={<NorthAmerica title="North America" />} />
      <Route path="/Europe" element={<Europe title="Europe" />} />
      <Route path="/Asia" element={<Asia title="Asia" />} />
      <Route path="/Africa" element={<Africa title="Africa" />} />
      <Route path="/SouthAmerica" element={<SouthAmerica title="South America" />} />
    </Routes>
  )
}