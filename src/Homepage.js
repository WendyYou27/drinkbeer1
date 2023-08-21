import React, { useState, useEffect } from "react";

const Homepage = () => {
  const images = [
    process.env.PUBLIC_URL + "/img/Carousel/party.jpg",
    process.env.PUBLIC_URL + "/img/Carousel/party2.jpg",
    process.env.PUBLIC_URL + "/img/Carousel/party3.jpg",
    process.env.PUBLIC_URL + "/img/Carousel/party4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const autoPlayInterval = 3000;

  useEffect(() => {
    // 使用 setInterval 函数定时更新 currentIndex
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ position: "relative", height: "600px", width: "100%" }}>
      {images.map((imageUrl, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            zIndex: index === currentIndex ? 1 : 0,
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={imageUrl}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
