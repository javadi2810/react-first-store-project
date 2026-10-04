import Button from "../button/Button";
import { Link } from "react-router-dom";

type Tproduct = {
  buttonContent:React.ReactNode;
  borderColor?: string;
  products: {
    id: number;
    url: string;
    name: string;
    abute: string;
    price: string;
  };
}

function ProductItems({ borderColor, products ,buttonContent}: Tproduct) {
  // لصفا borderColor=bg-color  قرار دهید   

  return (
    <div className={` w-90 bg-${borderColor} rounded-2xl `}>
      <div className="rounded-t-xl shadow-xl bg-gray-100  w-full p-5 flex flex-col gap-2">
        <img className="w-full h-60 mt-0" src={products.url} alt={products.name} />

        <h2 className="font-bold text-xl line-clamp-1">
          {products.name}
        </h2>

        <div className="p-4 h-20">
          <p className="line-clamp-2">
            {products.abute}
          </p>

        </div>


        <div className="price flex justify-between">
          <div>قیمت :</div>
          <div>
            <span>{products.price}</span>
            <span>تومان</span>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-5 w-full">
        <div className="bg-gray-100 col-span-1 h-15 rounded-b-xl "></div>
        <div className="bg-gray-100 col-span-3 h-15 rounded-b-4xl">

          <Link to={`/Productpage/${products.id}`}>
            <Button
              className={`bg-pink-300  h-full w-full rounded-full border-5 ${borderColor} flex justify-center items-center`}>
              {buttonContent}
            </Button>
          </Link>

        </div>
        <div className="bg-gray-100 col-span-1 h-15  rounded-b-xl"></div>
      </div>
    </div>
  )
}

export default ProductItems