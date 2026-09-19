import Container from "../../components/container/Container"
import ProductItems from "../../components/productitem/ProductItems"

function Store() {
  return (
    <>
      <div className="bg-green-300  h-full">
        <Container >
          <div className="grid grid-cols-4 gap-6">
            <ProductItems borderColor="border-green-300"/>
            <ProductItems borderColor="border-green-300"/>
            <ProductItems borderColor="border-green-300"/>
            <ProductItems borderColor="border-green-300"/>
            <ProductItems borderColor="border-green-300"/>
            <ProductItems borderColor="border-green-300"/>
            <ProductItems borderColor="border-green-300"/>
            <ProductItems borderColor="border-green-300"/>
            <ProductItems borderColor="border-green-300"/>
         
          </div>

        </Container>
      </div>
    </>
  )
}

export default Store