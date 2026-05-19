import React, { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ParticleConfig from "./particle-config";

export default function ParticleBackground() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const saveData = navigator.connection?.saveData;

    if (prefersReducedMotion || saveData) {
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
      window.setTimeout(start, 150);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  const options = useMemo(
    () => ({
      ...ParticleConfig,
      fpsLimit: 45,
      detectRetina: false,
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
      id="particles"
      className="particles-css"
      init={particlesInit}
      options={options}
    />
  );
}
