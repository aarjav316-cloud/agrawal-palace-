const Stats = () => {
  const stats = [
    { number: "98%+", label: "Guest Satisfaction Rate" },
    { number: "15+", label: "Years of Excellence" },
    { number: "25K+", label: "Happy Guests Served" },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#C8A96A] mb-4">
                {stat.number}
              </h3>
              <p className="text-sm md:text-base tracking-wide text-gray-600 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
