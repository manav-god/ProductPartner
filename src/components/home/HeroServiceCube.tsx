"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "./hero-cube.css";

type CubeFace = {
  id: string;
  face: "front" | "back" | "right" | "left";
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
    face: "back",
    href: "/product-marketing",
    number: "03",
    muted: "Product",
    bold: "Marketing",
    tagline: "Found by the people who are looking for you",
  },
  {
    id: "contact",
    face: "left",
    href: "/contact",
    number: "04",
    muted: "Get in",
    bold: "Touch",
    tagline: "Tell us what you're building. We'll help shape the plan",
  },
];

const BASE_X = -18;
const BASE_Y = 0;
const CYCLE_MS = 22000;

type Pose = { t: number; y: number };

/** Side faces only — pause on each of the 4 walls, then turn */
const IDLE_KEYFRAMES: Pose[] = [
  { t: 0, y: 0 }, // front
  { t: 0.18, y: 0 },
  { t: 0.26, y: -90 }, // right
  { t: 0.44, y: -90 },
  { t: 0.52, y: -180 }, // back
  { t: 0.7, y: -180 },
  { t: 0.78, y: -270 }, // left
  { t: 0.96, y: -270 },
  { t: 1, y: -360 }, // back to front
];

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

function sampleIdleY(progress: number) {
  const p = ((progress % 1) + 1) % 1;
  let i = 0;
  while (i < IDLE_KEYFRAMES.length - 1 && IDLE_KEYFRAMES[i + 1].t < p) i += 1;

  const a = IDLE_KEYFRAMES[i];
  const b = IDLE_KEYFRAMES[i + 1] ?? a;
  const span = Math.max(0.0001, b.t - a.t);
  const local = easeInOut((p - a.t) / span);

  return a.y + (b.y - a.y) * local;
}

export function HeroServiceCube() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const spinner = spinnerRef.current;
    if (!scene || !spinner) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = media.matches;

    let rotX = BASE_X;
    let rotY = BASE_Y;
    let dragging = false;
    let moved = false;
    let lastX = 0;
    let raf = 0;
    let idleOffset = 0;
    let resumeAt = 0;

    const setTransform = () => {
      spinner.style.transform = `rotateX(${BASE_X}deg) rotateY(${rotY}deg)`;
    };

    setTransform();

    const tick = (now: number) => {
      if (!dragging && !reduced) {
        if (resumeAt === 0) resumeAt = now;
        const elapsed = now - resumeAt + idleOffset;
        rotY = sampleIdleY(elapsed / CYCLE_MS);
        rotX = BASE_X;
        setTransform();
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      moved = false;
      if (resumeAt !== 0) {
        idleOffset += performance.now() - resumeAt;
        resumeAt = 0;
      }
      lastX = event.clientX;
      scene.setPointerCapture(event.pointerId);
      scene.classList.add("is-dragging");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;

      const dx = event.clientX - lastX;
      if (Math.abs(dx) > 1) moved = true;

      // Horizontal drag only — side faces
      rotY += dx * 0.38;
      lastX = event.clientX;
      setTransform();
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      scene.classList.remove("is-dragging");
      resumeAt = performance.now();
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
        rotY = BASE_Y;
        rotX = BASE_X;
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
    <div className="hero-cube" aria-label="3D services cube">
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
          <Link
            href="/"
            className="hero-cube__face hero-cube__face--top hero-cube__face--logo"
            aria-label="Product Partner home"
            draggable={false}
          >
            <Image
              src="/images/icons/pp-logo-nav.png"
              alt="Product Partner"
              width={320}
              height={320}
              className="hero-cube__logo"
              priority
            />
          </Link>
          <div className="hero-cube__face hero-cube__face--bottom" aria-hidden />
        </div>
      </div>
    </div>
  );
}
