import room1 from "../assets/room1.jpeg";

const FeaturedRoom = () => {
  return (
    <section className="py-24 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="relative overflow-hidden rounded-2xl shadow-lg h-[500px] md:h-[600px]">
          <img
            src={room1}
            alt="Featured Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-8 md:px-16 animate-fade-in-up">
              <p className="text-[#C8A96A] text-sm tracking-[0.3em] uppercase mb-4">
                Special Offer
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                Luxury Suite
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Indulge in the ultimate luxury experience with panoramic city
                views and exclusive amenities.
              </p>
              <div className="flex items-center gap-2 mb-8">
                <span className="text-3xl font-serif text-[#C8A96A]">
                  ₹2500
                </span>
                <span className="text-gray-400">/night</span>
              </div>
              <button className="bg-[#C8A96A] text-black px-8 py-3 rounded-md text-sm tracking-widest font-medium hover:bg-[#B89858] transition-all duration-300">
                RESERVE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoom;
