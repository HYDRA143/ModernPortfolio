import React, { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ICON_SOURCES = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
];

export default function ParticleHeaderBg() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const saveData = navigator.connection?.saveData;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (prefersReducedMotion || saveData || isMobile) {
      return undefined;
    }

    let cancelled = false;
    const start = () => {
      if (!cancelled) {
        setShouldRender(true);
      }
    };

    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(start, { timeout: 1000 });
    } else {
      window.setTimeout(start, 200);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  const particleOptions = useMemo(
    () => ({
      fpsLimit: 40,
      detectRetina: false,
      background: {
        color: "transparent",
      },
      fullScreen: {
        enable: false,
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
          resize: true,
        },
      },
      particles: {
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 10,
        },
        shape: {
          type: "image",
          options: {
            image: ICON_SOURCES.map((src) => ({
              src,
              width: 36,
              height: 36,
            })),
          },
        },
        size: {
          value: {
            min: 24,
            max: 40,
          },
          animation: {
            enable: false,
          },
        },
        opacity: {
          value: {
            min: 0.55,
            max: 0.9,
          },
          animation: {
            enable: false,
          },
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 1.4,
          outModes: {
            default: "out",
          },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [],
  );

  if (!shouldRender) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="particles-2-css"
      options={particleOptions}
    />
  );
}
