import React, { useState } from "react";
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

const Gallery = ({ images = [], width = "100%", height = "auto", radius = "0px", className = "", showThumbs }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex <images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToSlide = (index) => setCurrentIndex(index);
    return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Slide principal */}
      <div className="overflow-hidden rounded-md" style={{ borderRadius: radius, height }}>
        <img
          src={images[currentIndex]?.src}
          alt={`slide-${currentIndex}`}
          className="w-full h-full object-cover transition-all duration-500"
          style={{ borderRadius: radius }}
        />
      </div>

      {/* Setas */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 disabled:opacity-30"
      >
        <img src={arrowLeft} alt="Anterior" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentIndex === images.length - 1}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 disabled:opacity-30"
      >
        <img src={arrowRight} alt="Próximo" />
      </button>

      {/* Miniaturas */}
      {showThumbs && (
        <div className="flex gap-2 mt-4 justify-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`thumb-${index}`}
              className={`w-[117px] h-[95px] object-cover cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "border-2 border-primary" : "opacity-60"
              }`}
              onClick={() => goToSlide(index)}
              style={{ borderRadius: radius }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
 
export default Gallery;