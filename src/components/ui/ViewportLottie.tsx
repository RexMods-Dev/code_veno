import React, { useRef } from 'react';
import LottieModule from 'lottie-react';
import { useInView } from 'react-intersection-observer';

const LottieComponent = (LottieModule as any).default || LottieModule;

interface ViewportLottieProps {
  animationData: any;
  loop?: boolean;
  className?: string;
  renderer?: 'svg' | 'canvas';
}

/**
 * A performance-optimized Lottie wrapper that:
 * - Only plays when the animation is visible in the viewport.
 * - Pauses completely when scrolled off-screen, freeing CPU cycles.
 */
export const ViewportLottie: React.FC<ViewportLottieProps> = ({
  animationData,
  loop = true,
  className,
  renderer = 'canvas',
}) => {
  const lottieRef = useRef<any>(null);
  const { ref: containerRef, inView } = useInView({
    threshold: 0.05,
    triggerOnce: false,
  });

  // Control play/pause based on viewport visibility
  React.useEffect(() => {
    if (!lottieRef.current) return;
    if (inView) {
      lottieRef.current.play?.();
    } else {
      lottieRef.current.pause?.();
    }
  }, [inView]);

  return (
    <div ref={containerRef} className={className}>
      <LottieComponent
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={false}
        renderer={renderer}
      />
    </div>
  );
};
