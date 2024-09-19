const HeadLineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      <div className=" rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, Bogo's Out.</p>
          <p className=" text-1xl px-2">Through 8/25</p>
          <button className="border-white bg-white text-green-700 text-1xl mx-2 my-2 p-2 rounded-full absolute">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-[200px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>

      <div className=" rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className=" text-1xl px-2">Added Daily</p>
          <button className="border-white bg-white text-green-700 text-1xl mx-2 my-2 p-2 rounded-full absolute">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-[200px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>

      <div className=" rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts</p>
          <p className=" text-1xl px-2">Tasty Treats</p>
          <button className="border-white bg-white text-green-700 text-1xl mx-2 my-2 p-2 rounded-full absolute">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-[200px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadLineCards;
