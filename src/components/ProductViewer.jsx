import React, { useRef, useEffect, useState } from "react";
import { laptop } from "../utils";

const ProductViewer = () => {
  const sectionRef = useRef(null);
  const [scale, setScale] = useState(0.5);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the progress of the section entering the viewport
        const progress = 1 - (top + height / 2) / (windowHeight + height / 2);
        const clampedProgress = Math.max(0, Math.min(1, progress));

        // Start animation when the section is partially in view
        if (top < windowHeight && top > -height) {
          const newScale = 0.5 + clampedProgress * 0.5; // Scale from 0.5 to 1
          const newOpacity = clampedProgress; // Fade in
          setScale(newScale);
          setOpacity(newOpacity);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="product-viewer" className="common-padding">
      <div className="screen-max-width">
        <h2 className="text-5xl font-semibold mb-10">Take a closer look.</h2>
        <div className="relative flex items-center justify-center">
          <img
            src={laptop}
            alt="Laptop"
            style={{
              transform: `scale(${scale})`,
              opacity: opacity,
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            }}
            className="rounded-lg"
          />
        </div>
        <p className="text-center text-gray-300 mt-6">
          This is a stunning display of modern technology, designed to bring
          your ideas to life.
        </p>
      </div>
    </section>
  );
};

export default ProductViewer;
