import { useEffect } from "react";
import "./CustomCursor.css";

const SPARKLES = ["✦", "✧", "⋆", "★", "·", "✩"];
const COLORS = ["#bae1ff", "#ffd6e0", "#b9fbc0", "#ffeaa7", "#c3b1e1", "#ffffff"];

let lastSpawn = 0;

function CustomCursor() {
  useEffect(() => {
    const onMove = (e) => {
      const now = Date.now();
      if (now - lastSpawn < 40) return;
      lastSpawn = now;

      const el = document.createElement("span");
      el.className = "sparkle-particle";
      el.textContent = SPARKLES[Math.floor(Math.random() * SPARKLES.length)];
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.fontSize = `${Math.random() * 0.7 + 0.5}rem`;
      el.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      el.style.setProperty("--dx", `${(Math.random() - 0.5) * 40}px`);
      el.style.setProperty("--dy", `${-(Math.random() * 25 + 10)}px`);

      document.body.appendChild(el);
      setTimeout(() => el.remove(), 700);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}

export default CustomCursor;
