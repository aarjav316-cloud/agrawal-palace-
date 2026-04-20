import { useState, useRef, useEffect } from "react";
import room1 from "../assets/room1.jpeg";
import room2 from "../assets/room2.jpeg";
import room3 from "../assets/room3.jpeg";
import room4 from "../assets/room4.jpeg";
import room5 from "../assets/room5.jpeg";

const RoomsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileScrollRef = useRef(null);

  const rooms = [
    { src: room1, alt: "Deluxe Room" },
    { src: room2, alt: "Premium Suite" },
    { src: room3, alt: "Executive Room" },
    { src: room4, alt: "Royal Suite" },
    { src: room5, alt: "Garden View Room" },
  ];

  // Mobile scroll snap handler
  useEffect(() => {
    const handleMobileScroll = () => {
      if (!mobileScrollRef.current || window.innerWidth >= 768) return;

      const scrollLeft = mobileScrollRef.current.scrollLeft;
      const itemWidth = mobileScrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);

      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < rooms.length
      ) {
        setActiveIndex(newIndex);
      }
    };

    const scrollContainer = mobileScrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleMobileScroll);
      return () =>
        scrollContainer.removeEventListener("scroll", handleMobileScroll);
    }
  }, [activeIndex, rooms.length]);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev + 1) % rooms.length);
  };

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  return (
    <>
      <section id="rooms" className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-gray-800 mb-16">
            Our Rooms
          </h2>

          {/* Mobile Gallery - Clean Scroll Snap */}
          <div className="md:hidden">
            <div
              ref={mobileScrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-center"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl mx-auto max-w-sm">
                    <img
                      src={room.src}
                      alt={room.alt}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                    />
                    {index === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pb-8">
                        <p className="text-[#E8D4A0] text-xs tracking-[0.2em] uppercase mb-3 font-light">
                          Premium Rooms
                        </p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-serif text-[#F5E6C8] drop-shadow-lg">
                            ₹2000
                          </span>
                          <span className="text-white/90 text-lg font-light">
                            /day
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {rooms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const scrollContainer = mobileScrollRef.current;
                    if (scrollContainer) {
                      scrollContainer.scrollTo({
                        left: index * scrollContainer.offsetWidth,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-gray-800"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Gallery - Clean Grid Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map((room, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  <img
                    src={room.src}
                    alt={room.alt}
                    className="w-full h-72 lg:h-80 object-cover"
                    loading="lazy"
                  />
                  {index === 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pb-8">
                      <p className="text-[#E8D4A0] text-xs tracking-[0.2em] uppercase mb-3 font-light">
                        Premium Rooms
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-serif text-[#F5E6C8] drop-shadow-lg">
                          ₹2000
                        </span>
                        <span className="text-white/90 text-lg font-light">
                          /day
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white text-5xl hover:text-gray-300 transition-colors z-10"
          >
            ‹
          </button>

          <div
            className="max-w-7xl max-h-[90vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={rooms[selectedImage].src}
              alt={rooms[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white text-5xl hover:text-gray-300 transition-colors z-10"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default RoomsGallery;
