import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

const Globe = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const updateGlobeSize = () => {
      const width = canvasRef.current.offsetWidth;
      const height = width; // Maintain a 1:1 aspect ratio

      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: height * 2,
        phi: 0,
        theta: 0,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1], // Dark gray instead of white
        markerColor: [151 / 255, 60 / 255, 11 / 255], // Darker orange
        glowColor: [1, 1, 1], // Darker cyan
        markers: [
          // longitude latitude
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 }
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        }
      });

      return () => globe.destroy();
    };

    // Initial size update
    updateGlobeSize();

    // Resize globe on window resize
    window.addEventListener("resize", updateGlobeSize);

    return () => {
      window.removeEventListener("resize", updateGlobeSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "auto", maxWidth: "600px", aspectRatio: 1 }}
    />
  );
};

export default Globe;
