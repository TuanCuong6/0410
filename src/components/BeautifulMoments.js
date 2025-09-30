import React, { useState, useEffect, useRef } from "react";
import moment1 from "../assets/images/moment1.jpg";
import moment2 from "../assets/images/moment2.jpg";
import moment3 from "../assets/images/moment3.jpg";
import moment4 from "../assets/images/moment4.jpg";
import moment5 from "../assets/images/moment5.jpg";
import moment6 from "../assets/images/moment6.jpg";

const BeautifulMoments = () => {
  const [visibleMoments, setVisibleMoments] = useState([]);
  const sectionRef = useRef(null);

  const moments = [
    { id: 1, src: moment1, alt: "Khoảnh khắc đẹp 1" },
    { id: 2, src: moment2, alt: "Khoảnh khắc đẹp 2" },
    { id: 3, src: moment3, alt: "Khoảnh khắc đẹp 3" },
    { id: 4, src: moment4, alt: "Khoảnh khắc đẹp 4" },
    { id: 5, src: moment5, alt: "Khoảnh khắc đẹp 5" },
    { id: 6, src: moment6, alt: "Khoảnh khắc đẹp 6" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleMoments((prev) => {
              if (!prev.includes(id)) {
                return [...prev, id];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".moment-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-600 mb-4">
            Những Khoảnh Khắc Đẹp
          </h2>
          <p className="text-lg md:text-xl text-pink-500 max-w-2xl mx-auto">
            Đôi khi, hạnh phúc chỉ đơn giản là được nhìn thấy em cười.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {moments.map((moment, index) => (
            <div
              key={moment.id}
              data-id={moment.id}
              className={`moment-item aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-4 border-white ${
                visibleMoments.includes(moment.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transition: visibleMoments.includes(moment.id)
                  ? `all 700ms ease-out ${
                      index * 100
                    }ms, transform 300ms ease-out`
                  : "all 700ms ease-out",
              }}
            >
              <img
                src={moment.src}
                alt={moment.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautifulMoments;
