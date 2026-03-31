const ExploreRooms = () => {
  const rooms = [
    {
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      title: "Royal Suite",
      price: "$799",
    },
    {
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070",
      title: "Ocean View Suite",
      price: "$499",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 h-96"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-serif text-white mb-2">
                  {room.title}
                </h3>
                <p className="text-[#C8A96A] text-xl font-medium">
                  From {room.price}/night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreRooms;
