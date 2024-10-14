import { useState } from "react";
import image1 from "../assets/AdvertisementImages/ad1.jpg";
import image2 from "../assets/AdvertisementImages/ad2.jpg";
import image3 from "../assets/AdvertisementImages/ad3.jpg";

const images = [image1, image2, image3];

function Services() {
  const [index, setIndex] = useState(0);

  return (
    <div className="services">
      <div className="text-white text-3xl text-center mb-4 font-serif">
        Save on Every ride!
      </div>
      <div className="slideshowSlider flex gap-4 justify-center ml-[2%] mr-[2%] bg-[#6D7179] p-4 rounded-md bg-opacity-50">
        {images.map((imageUrl, idx) => (
          <img
            key={idx}
            src={imageUrl}
            alt={`Slide ${idx + 1}`}
            className={`service-slide w-40 h-40 object-cover rounded-lg ${
              index === idx ? "border-8 border-gray-800 shadow-md" : ""
            }`}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
      <div className="slideshowDots flex justify-center mt-4">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 mx-2 rounded-full ${
              index === idx ? "bg-gray-500" : "bg-gray-300"
            }`}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
