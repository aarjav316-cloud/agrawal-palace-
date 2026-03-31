import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer:
        "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request, subject to availability.",
    },
    {
      question: "What amenities are included?",
      answer:
        "All rooms include free Wi-Fi, flat-screen TV, minibar, premium toiletries, 24/7 room service, and access to our spa, fitness center, and pool.",
    },
    {
      question: "Is parking available?",
      answer:
        "Yes, we offer complimentary valet parking for all our guests. Additional secure parking is available for extended stays.",
    },
    {
      question: "Can I cancel or modify my reservation?",
      answer:
        "Cancellations made 48 hours before arrival are fully refundable. Modifications can be made up to 24 hours before check-in, subject to availability.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-6">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left flex justify-between items-center group"
                >
                  <span className="text-lg font-medium text-gray-800 group-hover:text-[#C8A96A] transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-400 group-hover:text-[#C8A96A] transition-colors">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
