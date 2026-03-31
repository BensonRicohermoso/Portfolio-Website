import React, { useEffect, useRef } from 'react';

// Simple circle cursor with theme color (neon green)
const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Lerp for smooth trailing effect, or set directly for instant
      cursorX += (mouseX - cursorX) * 1;
      cursorY += (mouseY - cursorY) * 1;
      if (cursorRef.current) {
        cursorRef.current.style.left = cursorX + 'px';
        cursorRef.current.style.top = cursorY + 'px';
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '32px',
        height: '32px',
        background: 'rgba(255,255,255,0.15)', // White with some transparency
        border: '2px solid #fff', // White border
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        transition: 'background 0.2s, border 0.2s', // Only color/border, not position
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default CustomCursor;
