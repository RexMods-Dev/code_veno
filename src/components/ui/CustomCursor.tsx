import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth physics spring for the outer follower ring
  const springConfig = { stiffness: 400, damping: 28, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Enable custom cursor only on desktop devices with fine pointer
    const checkDesktop = () => {
      const finePointer = window.matchMedia('(pointer: fine)').matches;
      const desktopWidth = window.innerWidth >= 768;
      setIsDesktop(finePointer && desktopWidth);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('.glass') !== null ||
        target.closest('[role="button"]') !== null ||
        target.getAttribute('data-cursor') === 'pointer';

      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Hide default cursor on desktop when custom cursor is active */}
      <style>{`
        @media (pointer: fine) and (min-width: 768px) {
          body, a, button, input, select, textarea, [role="button"], .glass {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Smooth Trailing Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full border border-white/40 bg-white/[0.03] backdrop-blur-[1px] shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          scale: isClicked ? 0.85 : 1,
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.35)',
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
        }}
        transition={{
          width: { duration: 0.2 },
          height: { duration: 0.2 },
          scale: { duration: 0.1 },
          borderColor: { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
        }}
      />

      {/* Instant Precision Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100000] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
          scale: isClicked ? 0.6 : 1,
        }}
        transition={{
          width: { duration: 0.15 },
          height: { duration: 0.15 },
          scale: { duration: 0.1 },
        }}
      />
    </>
  );
};

