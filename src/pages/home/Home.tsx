import Container from "../../components/container/Container"
import ProductItems from "../../components/productitem/ProductItems"

function Home() {
  return (
    <div className="h-screen bg-blue-300">
      <Container>
        <ProductItems borderColor="border-blue-300" />
      </Container>
    </div>
  )
}

export default Home