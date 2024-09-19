import { Data } from "../data/data";
import { useState } from "react";

const Food = () => {
  const [foods, setFoods] = useState(Data);
  console.log(Data);
  function filterFoods(category) {
    setFoods(
      Data.filter((item) => {
        return item.category === category;
      })
    );
  }
  function filterPrice(price) {
    setFoods(
      Data.filter((item) => {
        return item.price === price;
      })
    );
  }

  return (
    <div className="px-4 max-w-[1640px] m-auto py-6 ">
      <h1 className="text-green-700 font-bold text-4xl text-center ">
        Top Rated Menu Items.
      </h1>
      {/*Filter Row*/}
      <div className="flex flex-col p-2 lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-2xl text-green-700 py-2 text-center ">
            Filter Type
          </p>
          <div>
            <button
              onClick={() => setFoods(Data)}
              className="p-2 m-2 text-green-700 text-2xl border-2 rounded border-green-700 hover:bg-green-700 hover:text-white duration-500"
            >
              All
            </button>
            <button
              onClick={() => filterFoods("burger")}
              className="p-2 m-2 text-green-700 text-2xl border-2 rounded border-green-700 hover:bg-green-700 hover:text-white duration-500"
            >
              Burger
            </button>
            <button
              onClick={() => filterFoods("chicken")}
              className="p-2 m-2 text-green-700 text-2xl border-2 rounded border-green-700 hover:bg-green-700 hover:text-white duration-500"
            >
              Chicken
            </button>
            <button
              onClick={() => filterFoods("pizza")}
              className="p-2 m-2 text-green-700 text-2xl border-2 rounded border-green-700 hover:bg-green-700 hover:text-white duration-500"
            >
              Pizza
            </button>
            {/* <button>Salad</button> */}
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-2xl text-green-700 py-2 text-center ">
            Filter Price
          </p>
          <div className="flex justify-between max-w-[390px] w-full ">
            <button
              onClick={() => filterPrice(18)}
              className="p-2 m-2 text-green-700 text-2xl border-2 rounded border-green-700 hover:bg-green-700 hover:text-white duration-500"
            >
              $
            </button>
            <button
              onClick={() => filterPrice(20)}
              className="p-2 m-2 text-green-700 text-2xl border-2 rounded border-green-700 hover:bg-green-700 hover:text-white duration-500"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice(15)}
              className="p-2 m-2 text-green-700 text-2xl border-2 rounded border-green-700 hover:bg-green-700 hover:text-white duration-500"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice(19.9)}
              className="p-2 m-2 text-green-700 text-2xl border-2 rounded border-green-700 hover:bg-green-700 hover:text-white duration-500"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* map foods */}
      <div className="grid grid-col-2 lg:grid-cols-4 gap-5 pt-4  ">
        {foods.map((data, id) => (
          <div
            key={id}
            className="border rounded-xl border-green-700 shadow-lg hover:scale-105 duration-300 "
          >
            <img
              src={data.src}
              alt={data.name}
              className=" w-full object-cover h-[200px] rounded-t-xl"
            />
            <div className="px-2 py-4">
              <p className="font-bold">{data.name}</p>
              <p className="text-green-700 font-bold">{data.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
