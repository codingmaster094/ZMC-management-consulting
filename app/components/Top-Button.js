'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Top_button from "../../public/images/Top-button.svg";

const TopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    // Show button if scroll position is more than 100px
    setVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    const scrollTo = (target, duration) => {
      const start = window.scrollY; // Current scroll position
      const change = target - start; // Distance to scroll
      const increment = 20; // Interval in milliseconds
      let currentTime = 0;

      const animateScroll = () => {
        currentTime += increment; // Increment the time
        const val = easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val); // Scroll to the new position
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll); // Continue the animation
        }
      };

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2; // Normalize time
        if (t < 1) return (c / 2) * t * t + b; // First half
        t--; // Adjust time for second half
        return (-c / 2) * (t * (t - 2) - 1) + b; // Second half
      };

      animateScroll(); // Start the animation
    };

    scrollTo(0, 600); // Scroll to top over 600ms
  };

  useEffect(() => {
    // Add scroll event listener to toggle button visibility
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      // Clean up event listener on component unmount 
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button onClick={scrollToTop} id="backToTop" className="fixed bottom-4 right-4 bg-primary text-white p-3 border border-secondary shadow-btn_shadow hover:bg-white hover:text-primary transition-all duration-300" style={{display: visible ? 'block' : 'none',}} aria-label="Scroll to top">
    {/* <Image src={Top_button} alt="Top_button"/> */}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 5l0 14"></path>
      <path d="M16 9l-4 -4"></path>
      <path d="M8 9l4 -4"></path>
    </svg>
  </button>
  );
};

export default TopButton;
