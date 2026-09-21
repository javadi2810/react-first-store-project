import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/Layout/Layout"
import Productpage from "./pages/productpage/Productpage"

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/Store" element={<Store />} />
        <Route path="/" element={<Home />} />
        <Route path="/Productpage/:id" element={<Productpage />} />

      </Routes>
    </Layout>

  )
}

export default App
