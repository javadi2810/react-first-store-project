import Container from "../../components/container/Container"
import ProductItems from "../../components/productitem/ProductItems"

function Store() {
  return (
    <>
      <div className="bg-green-300  h-full">
        <Container >
          <div className="grid grid-cols-1 min-[750px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
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