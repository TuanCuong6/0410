import React, { useState, useEffect, useRef } from "react";
import background from "../assets/images/background.jpg";

const BirthdayWishes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-fixed-mobile"
      style={{ backgroundImage: `url(${background})` }}
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="text-center text-white relative z-20 px-4 max-w-4xl mx-auto">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-pink-200 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Chúc Mừng Sinh Nhật Tuổi 18
        </h1>

        <div
          className={`space-y-6 text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl p-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p>Chúc em tuổi mới thật nhiều sức khỏe, luôn xinh đẹp và rạng rỡ.</p>
          <p>
            Chúc em học thật tốt và làm được những điều mình thích. Cứ tự tin là
            em làm được hết.
          </p>
          <p>
            Trên mọi nẻo đường, hãy nhớ rằng luôn có anh ở đây, cổ vũ và đồng
            hành cùng em.
          </p>
          <p>Thật nhiều yêu thương gửi đến em hôm nay và mãi về sau.</p>
        </div>

        <div
          className={`border-t border-pink-300 pt-8 mt-8 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl md:text-2xl font-light text-pink-200">
            Từ Tuấn Cường của em
          </p>
          <div className="text-5xl mt-4 animate-pulse">💖</div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayWishes;
