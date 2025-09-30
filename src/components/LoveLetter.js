import React, { useState, useEffect, useRef } from "react";

const LoveLetter = () => {
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
    <section className="py-16 px-4 bg-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pink-200 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-600 mb-4">
              Lời Yêu Thương Gửi Em
            </h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p className="text-center">
              <strong className="text-pink-600 text-2xl">
                Gửi Yến Nhi của anh,
              </strong>
            </p>

            <p className="text-justify">
              Đến bây giờ anh vẫn thấy mình thật may mắn. Cảm ơn cuộc đời đã cho
              anh gặp được em - một cô gái dịu dàng, mạnh mẽ và luôn biết cách
              khiến anh cảm thấy ấm lòng.
            </p>

            <p className="text-justify">
              Có những ngày anh mệt mỏi, chỉ cần nhìn thấy em, nghe giọng nói
              của em, mọi thứ dường như nhẹ nhàng hơn hẳn. Em là món quà lớn
              nhất mà anh có được trong năm vừa rồi.
            </p>

            <p className="text-justify">
              Anh không hứa hẹn những điều quá xa vời, nhưng anh hứa sẽ luôn cố
              gắng trở thành chỗ dựa vững chắc cho em, cùng em học tập, cùng em
              trưởng thành và cùng em đi qua những năm tháng tuyệt vời sắp tới.
            </p>

            <p className="text-right font-semibold text-pink-600 text-xl mt-8">
              Cảm ơn em vì tất cả.
              <br />
              Yêu em.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
