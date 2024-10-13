import { useEffect, useState, useRef } from "react";
import image1 from "../assets/AdvertisementImages/ad1.jpg";
import image2 from "../assets/AdvertisementImages/ad2.jpg";
import image3 from "../assets/AdvertisementImages/ad3.jpg";

const images = [image1, image2, image3];
const delay = 2700;

function AdvertisementSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
  <div
    className="slideshowSlider"
    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
  >
    {images.map((imageUrl, idx) => (
      <img
        key={idx}
        src={imageUrl}
        alt={`Slide ${idx + 1}`}
        className="slide"
      />
    ))}
  </div>
  <div className="slideshowDots">
    {images.map((_, idx) => (
      <div
        key={idx}
        className={`slideshowDot${index === idx ? " active" : ""}`}
        onClick={() => setIndex(idx)}
      />
    ))}
  </div>
</div>
  );
}

export default AdvertisementSlider;