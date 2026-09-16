import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Store from "./pages/store/Store"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/"   element={<Home />} />
          <Route path="/Store"   element={<Store />} />
      </Routes>
    </>
  )
}

export default App
