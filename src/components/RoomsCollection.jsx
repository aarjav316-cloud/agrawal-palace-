const RoomsCollection = () => {
  const rooms = [
    {
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
      title: "Deluxe Suite",
      price: "$299",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074",
      title: "Presidential Suite",
      price: "$599",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074",
      title: "Garden View Room",
      price: "$199",
    },
  ];

  return (
    <section id="rooms" className="py-24 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-gray-800 mb-16">
          Our Exquisite Rooms Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64 md:h-72">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#C8A96A] text-black px-4 py-2 rounded-md text-sm font-medium">
                  {room.price}/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-gray-800 mb-2">
                  {room.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Experience luxury and comfort in our beautifully designed
                  rooms
                </p>
                <button className="text-[#C8A96A] hover:text-[#B89858] text-sm tracking-wide uppercase font-medium transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsCollection;
