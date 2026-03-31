import garden2 from "../assets/garden2.jpeg";

const AboutUs = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Side - Image */}
          <div className="relative group animate-fade-in-left">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <img
                src={garden2}
                alt="Luxury Hotel Interior"
                className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="animate-fade-in-right">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#C8A96A] mb-6 font-medium">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-8 leading-tight">
              Experience Timeless Luxury at Agrawal Palace
            </h2>

            <div className="space-y-6 max-w-xl text-gray-600 leading-relaxed">
              <p>
                Nestled in the heart of elegance, Agrawal Palace offers an
                unparalleled experience of
                <span className="font-semibold text-[#C8A96A]">
                  {" "}
                  luxury
                </span>{" "}
                and
                <span className="font-semibold text-[#C8A96A]"> comfort</span>.
                Every detail has been thoughtfully crafted to create an
                atmosphere of refined sophistication.
              </p>

              <p>
                Our commitment to excellence ensures every guest enjoys
                <span className="font-semibold text-[#C8A96A]">
                  {" "}
                  world-class amenities
                </span>
                , personalized service, and unforgettable moments in a setting
                that blends timeless tradition with modern indulgence.
              </p>

              <p>
                From the moment you arrive, you'll discover why Agrawal Palace
                is more than just a hotel — it's a destination where memories
                are made and dreams come to life.
              </p>
            </div>

            <button className="mt-10 border-2 border-black text-black px-8 py-3 rounded-md text-sm tracking-wider uppercase font-medium hover:bg-black hover:text-white transition-all duration-300">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
