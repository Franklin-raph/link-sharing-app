import { HashRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { ShopContextProvider } from "./context/ShopContext"

function App() {

  return (
    <ShopContextProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </HashRouter>
    </ShopContextProvider>
  )
}

export default App
