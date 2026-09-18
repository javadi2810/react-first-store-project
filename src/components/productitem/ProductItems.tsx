

function ProductItems() {
  return (
    <div className=" w-80 m-4 rounded-lg">
      <div className="rounded-t-xl shadow-xl bg-gray-100  w-full p-5">
        <img className="w-full" src="./src/assets/img/images.jpg" alt="" />

        <h2>لنوو اسلیم 3</h2>

        <p className="">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>


        <div className="price flex justify-between">
          <div>قیمت :</div>
          <div>
            <span>150,000,000,</span>
            <span>تومان</span>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-5 w-full">
        <div className="bg-gray-100 col-span-1 h-15 rounded-b-xl "></div>
        <div className="bg-gray-100 col-span-3 h-15 rounded-b-4xl">
          <div className="bg-pink-500  h-full w-full rounded-full border-5 border-green-500"></div>
        </div>
        <div className="bg-gray-100 col-span-1 h-15  rounded-b-xl"></div>
      </div>
    </div>
  )
}

export default ProductItems