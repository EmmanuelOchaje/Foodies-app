const Hero = () => {
  return (
    <div className="max-w-[1640px] p-4 mx-auto ">
      <div className="h-full max-h-[500px] relative">
        <div className="absolute w-full h-full min-h-[500px] max-h-[500px] bg-black/40 text-white flex flex-col justify-center">
          <h1 className="px-4 text-3xl sm:text-5xl md:text-6xl lg:7xl font-bold ">
            The <span className="text-green-700">Best</span>
          </h1>
          <h1 className="px-4 text-3xl sm:text-5xl md:text-6xl lg:7xl font-bold ">
            Foods <span className="text-green-700">Delivered</span>
          </h1>
        </div>
      </div>
      <img
        className="w-full max-h-[500px] object-cover "
        src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Food"
      />
    </div>
  );
};

export default Hero;
