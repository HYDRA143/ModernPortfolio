import React, { useEffect, useRef } from "react";

const MOBILE_BREAKPOINT = 768;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const ParallaxSection = ({
  children,
  speed = 0.06,
  className = "",
  fadeOutOnScroll = false,
  fadeDistanceMultiplier = 0.9,
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    const isMobile = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT}px)`,
    ).matches;

    if (isMobile) {
      element.style.transform = "translate3d(0, 0, 0)";
      element.style.opacity = "1";
      return undefined;
    }

    let rafId = null;

    const updatePosition = () => {
      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const distance = sectionCenter - viewportCenter;
      const translateY = -distance * speed;

      element.style.transform = `translate3d(0, ${translateY}px, 0)`;

      if (fadeOutOnScroll) {
        const fadeDistance = window.innerHeight * fadeDistanceMultiplier;
        const progress = clamp(
          window.scrollY / Math.max(fadeDistance, 1),
          0,
          1,
        );
        element.style.opacity = `${1 - progress}`;
      } else {
        element.style.opacity = "1";
      }

      rafId = null;
    };

    const requestUpdate = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updatePosition);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      element.style.transform = "translate3d(0, 0, 0)";
      element.style.opacity = "1";
    };
  }, [fadeDistanceMultiplier, fadeOutOnScroll, speed]);

  return (
    <div ref={sectionRef} className={`parallax-section ${className}`.trim()}>
      {children}
    </div>
  );
};

export default ParallaxSection;
