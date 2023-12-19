import WelcomeImage from "@/assets/grill-ride-bag.webp";
import PromoImage from "@/assets/grill-ride-image.webp";
import { useEffect, useState } from "react";

const WelcomeImageSlider = () => {
  const images = [WelcomeImage, PromoImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>
      <div
        className={`imageSliderContainer ${currentIndex === 0 ? "active" : ""}`}
      >
        <img src={images[0]} alt="Slider Image" className="welcomeImages" />
      </div>
      <div
        className={`imageSliderContainer ${currentIndex === 0 ? "active" : ""}`}
      >
        <img src={images[1]} alt="Slider Image" className="welcomeImages" />
      </div>
    </>
  );
};

export default WelcomeImageSlider;
