import React, { useState, useEffect } from "react";
import background from "../assets/images/background.jpg";

const Header = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [dateText, setDateText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const fullDate = "04/10/2025";
  const titlePart1 = "Chúc Mừng Sinh Nhật ";
  const titlePart2 = "Yến Nhi";
  const descriptionText =
    "Tuổi 18 - một chặng đường mới đang chờ em phía trước. Và anh rất mừng vì chúng ta đang cùng nhau bước trên con đường ấy. Chỉ mong những khoảnh khắc bên nhau lúc này sẽ luôn là điều để mình nhớ mãi sau này.";

  useEffect(() => {
    if (currentStep === 0) {
      // Typing cho ngày tháng
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullDate.length) {
          setDateText(fullDate.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => setCurrentStep(1), 500);
        }
      }, 100);
      return () => clearInterval(timer);
    }

    if (currentStep === 1) {
      // Typing cho tiêu đề phần 1
      let index = 0;
      const timer = setInterval(() => {
        if (index <= titlePart1.length) {
          setTitleText(titlePart1.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => setCurrentStep(2), 300);
        }
      }, 80);
      return () => clearInterval(timer);
    }

    if (currentStep === 2) {
      // Typing cho tiêu đề phần 2 (Yến Nhi)
      let index = 0;
      const timer = setInterval(() => {
        if (index <= titlePart2.length) {
          setTitleText(titlePart1 + titlePart2.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => setCurrentStep(3), 500);
        }
      }, 80);
      return () => clearInterval(timer);
    }

    if (currentStep === 3) {
      // Hiển thị mô tả và background
      setShowDescription(true);
      setShowBackground(true);
    }
  }, [currentStep]);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-fixed-mobile"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className={`absolute inset-0 bg-black ${
          showBackground ? "bg-opacity-30" : "bg-opacity-0"
        } transition-all duration-1000`}
      ></div>

      <div className="text-center text-white relative z-20 px-4 max-w-4xl mx-auto">
        {/* Mẫu 4: Dấu gạch trang trí */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-pink-200 bg-opacity-50"></div>
            <div className="text-pink-200 font-light text-xl">{dateText}</div>
            <div className="w-8 h-px bg-pink-200 bg-opacity-50"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          {titleText.includes(titlePart2) ? (
            <>
              {titlePart1}
              <span className="text-pink-200">{titlePart2}</span>
            </>
          ) : (
            titleText
          )}
        </h1>

        {showDescription && (
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 animate-fade-in">
            {descriptionText}
          </p>
        )}

        {showDescription && (
          <div className="animate-bounce mt-12">
            <svg
              className="w-8 h-8 mx-auto text-pink-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
