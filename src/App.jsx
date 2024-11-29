import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Order from "./pages/Order"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Login from "./pages/Login"


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
