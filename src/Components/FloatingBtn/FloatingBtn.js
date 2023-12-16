import React from 'react'
import './FloatingBtn.scss'

const FloatingBtn = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <button className="floating-button" onClick={scrollToTop}>
        ↑
      </button>
    );
  };
  
export default FloatingBtn