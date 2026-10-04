"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(value);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-[rgba(192,144,43,0.18)]"><div className="h-full bg-gradient-to-r from-[#0d253d] to-[#c0902b] transition-[width] duration-150" style={{ width: `${progress}%` }} /></div>;
}
