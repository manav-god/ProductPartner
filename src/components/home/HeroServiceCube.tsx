"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import "./hero-cube.css";

type CubeFace = {
  id: string;
  face: "front" | "back" | "right" | "left" | "top" | "bottom";
  href: string;
  number: string;
  muted: string;
  bold: string;
  tagline: string;
};

const cubeFaces: CubeFace[] = [
  {
    id: "development",
    face: "front",
    href: "/product-development",
    number: "01",
    muted: "Product",
    bold: "Development",
    tagline: "We build what should exist, not just what's in the brief",
  },
  {
    id: "leadership",
    face: "right",
    href: "/product-management",
    number: "02",
    muted: "Product",
    bold: "Leadership",
    tagline: "Product thinking on the inside, not advice from the outside",
  },
  {
    id: "marketing",
    face: "top",
    href: "/product-marketing",
    number: "03",
    muted: "Product",
    bold: "Marketing",
    tagline: "Found by the people who are looking for you",
  },
  {
    id: "about",
    face: "back",
    href: "/about",
    number: "04",
    muted: "Our",
    bold: "Story",
    tagline: "Two journeys, one realization, one product partner",
  },
  {
    id: "work",
    face: "left",
    href: "/#work",
    number: "05",
    muted: "Our",
    bold: "Work",
    tagline: "Products shipped with teams who needed a real partner",
  },
  {
    id: "contact",
    face: "bottom",
    href: "/contact",
    number: "06",
    muted: "Get in",
    bold: "Touch",
    tagline: "Tell us what you're building. We'll help shape the plan",
  },
];

const INITIAL_X = -22;
const INITIAL_Y = -32;

export function HeroServiceCube() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const spinner = spinnerRef.current;
    if (!scene || !spinner) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = media.matches;

    let rotX = INITIAL_X;
    let rotY = INITIAL_Y;
    let velX = 0;
    let velY = 0;
    let dragging = false;
    let moved = false;
    let lastX = 0;
    let lastY = 0;
    let raf = 0;

    const setTransform = () => {
      spinner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };

    setTransform();

    const tick = () => {
      if (!dragging && !reduced) {
        rotX += velX;
        rotY += velY;
        velX *= 0.94;
        velY *= 0.94;

        if (Math.abs(velX) < 0.01) velX = 0;
        if (Math.abs(velY) < 0.01) velY = 0;

        setTransform();
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      moved = false;
      velX = 0;
      velY = 0;
      lastX = event.clientX;
      lastY = event.clientY;
      scene.setPointerCapture(event.pointerId);
      scene.classList.add("is-dragging");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;

      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) moved = true;

      const sensitivity = 0.38;
      rotY += dx * sensitivity;
      rotX -= dy * sensitivity;

      velY = dx * sensitivity * 0.55;
      velX = -dy * sensitivity * 0.55;

      lastX = event.clientX;
      lastY = event.clientY;
      setTransform();
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      scene.classList.remove("is-dragging");
      try {
        scene.releasePointerCapture(event.pointerId);
      } catch {
        // ignore
      }
    };

    const onClickCapture = (event: MouseEvent) => {
      if (moved) {
        event.preventDefault();
        event.stopPropagation();
        moved = false;
      }
    };

    const onMedia = () => {
      reduced = media.matches;
      if (reduced) {
        velX = 0;
        velY = 0;
        rotX = INITIAL_X;
        rotY = INITIAL_Y;
        setTransform();
      }
    };

    scene.addEventListener("pointerdown", onPointerDown);
    scene.addEventListener("pointermove", onPointerMove);
    scene.addEventListener("pointerup", onPointerUp);
    scene.addEventListener("pointercancel", onPointerUp);
    scene.addEventListener("click", onClickCapture, true);
    media.addEventListener("change", onMedia);

    return () => {
      window.cancelAnimationFrame(raf);
      scene.removeEventListener("pointerdown", onPointerDown);
      scene.removeEventListener("pointermove", onPointerMove);
      scene.removeEventListener("pointerup", onPointerUp);
      scene.removeEventListener("pointercancel", onPointerUp);
      scene.removeEventListener("click", onClickCapture, true);
      media.removeEventListener("change", onMedia);
    };
  }, []);

  return (
    <div className="hero-cube" aria-label="Interactive 3D services cube">
      <div ref={sceneRef} className="hero-cube__scene" role="presentation">
        <div ref={spinnerRef} className="hero-cube__spinner">
          {cubeFaces.map((face) => (
            <Link
              key={face.id}
              href={face.href}
              className={`hero-cube__face hero-cube__face--${face.face}`}
              draggable={false}
            >
              <span className="hero-cube__number">{face.number}</span>
              <span className="hero-cube__label">
                {face.muted}
                <strong>{face.bold}</strong>
              </span>
              <span className="hero-cube__tagline">{face.tagline}</span>
            </Link>
          ))}
        </div>
      </div>
      <p className="hero-cube__hint">Drag to explore all sides</p>
    </div>
  );
}
