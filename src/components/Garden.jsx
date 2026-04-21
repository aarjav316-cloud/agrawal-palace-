import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import exterior1 from "../assets/exterior1.jpeg";
import hotelHall from "../assets/hotelHall.jpeg";
import outside1 from "../assets/outside1.jpeg";
import insideHall1 from "../assets/insideHall1.jpeg";
import insideHall2 from "../assets/insideHall2.jpeg";
import garden1 from "../assets/garden1.jpeg";
import garden2 from "../assets/garden2.jpeg";
import gardenEntrance1 from "../assets/gardenEntrance1.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Garden = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const mobileScrollRef = useRef(null);

  const images = [
    { src: exterior1, alt: "Hotel Exterior" },
    { src: hotelHall, alt: "Hotel Hall" },
    { src: outside1, alt: "Outside View" },
    { src: insideHall1, alt: "Inside Hall 1" },
    { src: insideHall2, alt: "Inside Hall 2" },
    { src: garden1, alt: "Garden View 1" },
    { src: garden2, alt: "Garden View 2" },
    { src: gardenEntrance1, alt: "Garden Entrance" },
  ];

  // Create infinite loop by tripling the array
  const infiniteImages = [...images, ...images, ...images];
  const centerOffset = images.length; // Start at middle set

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
        newIndex < images.length
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
  }, [activeIndex, images.length]);

  useEffect(() => {
    if (!containerRef.current || window.innerWidth < 768) return;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // 3D Coverflow Animation
    const updateCards = () => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const distanceFromCenter = index - (activeIndex + centerOffset);
        const absDistance = Math.abs(distanceFromCenter);

        // 3D Transform values based on position
        let rotateY = 0;
        let translateZ = 0;
        let translateX = 0;
        let scale = 1;
        let opacity = 1;
        let blur = 0;
        let zIndex = 10;

        if (isMobile) {
          // Simplified mobile animation
          scale = index === activeIndex + centerOffset ? 1 : 0.85;
          opacity = index === activeIndex + centerOffset ? 1 : 0.6;
          translateX = distanceFromCenter * 280;
        } else if (isTablet) {
          // Reduced 3D for tablet
          rotateY = distanceFromCenter * 25;
          translateZ = absDistance * -100;
          translateX = distanceFromCenter * 200;
          scale = index === activeIndex + centerOffset ? 1 : 0.85;
          opacity = index === activeIndex + centerOffset ? 1 : 0.7;
          blur = absDistance > 0 ? 2 : 0;
          zIndex = 10 - absDistance;
        } else {
          // Full 3D for desktop
          rotateY = distanceFromCenter * 50;
          translateZ = absDistance * -200;
          translateX = distanceFromCenter * 300;
          scale = index === activeIndex + centerOffset ? 1 : 0.8;
          opacity = Math.max(0.4, 1 - absDistance * 0.2);
          blur = absDistance > 0 ? 3 : 0;
          zIndex = 10 - absDistance;
        }

        // Apply GSAP animation
        gsap.to(card, {
          rotateY,
          translateZ,
          x: translateX,
          scale,
          opacity,
          filter: `blur(${blur}px)`,
          zIndex,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    };

    updateCards();
  }, [activeIndex, centerOffset]);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <>
      <section
        id="garden"
        className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-gray-800 mb-12">
            Garden Gallery
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
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-center"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl mx-auto max-w-sm">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-white text-lg font-medium">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
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
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-72 lg:h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white text-xl font-medium">
                        {image.alt}
                      </p>
                      <p className="text-white/80 text-sm mt-1">
                        Click to view full size
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Removed for cleaner design */}
          {/* Navigation Controls - Removed for cleaner design */}
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
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
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

export default Garden;
