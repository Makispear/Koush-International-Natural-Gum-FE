import { useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import "./carousel.css";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () => {
      if (motionPreference.matches) setIsPlaying(false);
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!isPlaying || !images || images.length < 2) return undefined;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Changes slide every 5 seconds

    return () => clearInterval(interval);
  }, [images, isPlaying]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="hero-carousel-container"
      role="group"
      aria-label="Hero background slideshow"
    >
      <div className="carousel-overlay" aria-hidden="true"></div>
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
          aria-hidden="true"
        ></div>
      ))}

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show background image ${index + 1}`}
            aria-pressed={index === currentIndex}
          ></button>
        ))}
        <button
          type="button"
          className="carousel-play-toggle"
          onClick={() => setIsPlaying((playing) => !playing)}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <Pause size={16} aria-hidden="true" />
          ) : (
            <Play size={16} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
