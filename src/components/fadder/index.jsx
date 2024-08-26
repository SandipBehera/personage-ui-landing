import React, { useEffect, useRef, useState } from 'react';

const FaderComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility to true whenever the section enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset visibility when the section leaves the viewport
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Adjust this value based on when you want to trigger the animation
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FaderComponent;
