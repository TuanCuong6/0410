import React, { useState, useEffect, useRef } from "react";
import firstMeet from "../assets/images/first_meet.jpg";
import dating from "../assets/images/dating.jpg";
import gifts from "../assets/images/gifts.jpg";
import confession from "../assets/images/confession.jpg";
import hanoi from "../assets/images/hanoi.jpg";
import everyday from "../assets/images/everyday.jpg";

const OurJourney = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const milestones = [
    {
      id: 1,
      date: "15/03/2025",
      title: "Lần Đầu Gặp Gỡ",
      description:
        "Vẫn còn nhớ rõ cái ngày đầu tiên gặp em ở quán tào phớ Garden. Ấn tượng đầu tiên về một cô gái xinh xắn, nụ cười tươi và cách cư xử rất dễ thương. Từ lúc đó, anh đã muốn tìm cách để được gặp em nhiều hơn nữa.",
      image: firstMeet,
    },
    {
      id: 2,
      date: "Tháng 3/2025",
      title: "Những Buổi Đầu Tiên",
      description:
        "Rồi những ngày tháng sau đó, chúng mình cùng nhau khám phá bao nhiêu thứ. Từ những gian hàng ồn ào ở hội chợ trường học, đến những ly cafe nói chuyện cả buổi chiều, hay là lần đầu cùng nhau tô những bức tượng vụng về.",
      image: dating,
    },
    {
      id: 3,
      date: "Trước 10/7/2025",
      title: "Những Món Quà Ý Nghĩa",
      description:
        "Anh vẫn giữ tất cả những gì em tặng. Không phải vì món quà đó giá trị thế nào, mà vì nó là minh chứng cho sự chân thành của em. Mỗi lần đọc lại mấy dòng chữ trong thiệp, anh lại cười một mình.",
      image: gifts,
    },
    {
      id: 4,
      date: "10/07/2025",
      title: "Ngày Chúng Ta Thành Đôi",
      description:
        "Ngày anh quyết định nói ra điều mà có lẽ em cũng đã đoán được. Anh nhớ khuôn mặt bất ngờ nhưng rạng rỡ của em. Cảm giác lúc đó thật khó tả, chỉ biết là anh đã rất, rất hạnh phúc.",
      image: confession,
    },
    {
      id: 5,
      date: "11/09/2025",
      title: "Bước Ngoặt Hà Nội",
      description:
        "Em lên Hà Nội, một chương mới của cuộc đời sinh viên bắt đầu. Nhưng thật tốt khi chúng ta lại được ở gần nhau. Hà Nội đông đúc, nhưng vì có em, nó trở nên thân thuộc lạ thường.",
      image: hanoi,
    },
    {
      id: 6,
      date: "Hiện Tại",
      title: "Những Mảnh Ghép Bình Yên",
      description:
        "Anh thấy hạnh phúc thật sự không nằm ở những điều xa xôi, mà ở từng phút giây được ở bên em. Dù chỉ là khoảnh khắc bình thường, nó vẫn khiến anh thấy cuộc sống này đẹp hơn.",
      image: everyday,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleItems((prev) => {
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

    const elements = document.querySelectorAll(".milestone-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-600 mb-4">
            Hành Trình Của Chúng Ta
          </h2>
          <p className="text-lg md:text-xl text-pink-500 max-w-2xl mx-auto">
            Cùng nhìn lại từng chặng đường nhé, từ những bước chân đầu tiên...
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16" ref={sectionRef}>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              data-id={milestone.id}
              className={`milestone-item flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-6 lg:gap-8 transition-all duration-700 ${
                visibleItems.includes(milestone.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Phần ảnh - Kích thước nhỏ hơn, vuông */}
              <div className="w-full lg:w-2/5 max-w-xs mx-auto lg:max-w-none">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-square transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Phần nội dung */}
              <div className="w-full lg:w-3/5 text-center lg:text-left">
                <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {milestone.date}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">
                  {milestone.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed bg-white bg-opacity-50 rounded-2xl p-6">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
