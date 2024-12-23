import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Menu from "./pages/Menu"
import Orders from "./pages/Orders"
import Admin from "./pages/Admin"


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
