import React, { useEffect, useRef, useCallback } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isTouch = useRef(false);

  // Check for touch/coarse pointer on mount
  useEffect(() => {
    isTouch.current = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
    }
  }, []);

  const onMouseOver = useCallback((e: MouseEvent) => {
    if (!cursorRef.current) return;
    const target = e.target as HTMLElement;
    const isInteractive =
      target.tagName.toLowerCase() === 'button' ||
      target.tagName.toLowerCase() === 'a' ||
      target.closest('button') ||
      target.closest('a');

    cursorRef.current.style.width = isInteractive ? '64px' : '32px';
    cursorRef.current.style.height = isInteractive ? '64px' : '32px';
    cursorRef.current.style.marginLeft = isInteractive ? '-16px' : '0px';
    cursorRef.current.style.marginTop = isInteractive ? '-16px' : '0px';
  }, []);

  useEffect(() => {
    // Don't attach listeners on touch devices or small screens
    if (isTouch.current) return;

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [onMouseMove, onMouseOver]);

  // Render nothing on touch devices
  if (typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] bg-white mix-blend-difference hidden md:block"
      style={{
        width: 32,
        height: 32,
        willChange: 'transform',
        transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease',
      }}
    />
  );
};
