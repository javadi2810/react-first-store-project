type Tproduct = {
  borderColor?: string;
  products?: {
    id: number;
    url:string;
    name: string;
    abute: string;
    price: string;
  };
}

function ProductItems({ borderColor, products}: Tproduct) {
  // لصفا borderColor=bg-color  قرار دهید   

  let bColor = borderColor;
  console.log(products.name);

  return (
    <div className={` w-90 bg-${borderColor} rounded-2xl `}>
      <div className="rounded-t-xl shadow-xl bg-gray-100  w-full p-5 flex flex-col gap-2">
        <img className="w-full h-60 mt-0" src={products.url} alt="" />

        <h2 className="font-bold text-xl">
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

          <button className={`bg-pink-300  h-full w-full rounded-full border-5 ${bColor} flex justify-center items-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </button>

        </div>
        <div className="bg-gray-100 col-span-1 h-15  rounded-b-xl"></div>
      </div>
    </div>
  )
}

export default ProductItems