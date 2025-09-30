import React, { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 4,
        size: 10 + Math.random() * 10,
      };
      setHearts((prev) => [...prev, heart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
      }, 12000);
    };

    const interval = setInterval(createHeart, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-300 opacity-60"
          style={{
            left: `${heart.left}%`,
            animation: `heartFloat ${heart.animationDuration}s linear forwards`,
            fontSize: `${heart.size}px`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
