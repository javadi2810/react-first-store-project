import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/Layout/Layout"

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/Store" element={<Store />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>

  )
}

export default App
