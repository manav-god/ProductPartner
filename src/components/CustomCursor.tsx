"use client";

import { useEffect, useRef, useState } from "react";

type Rgb = { r: number; g: number; b: number; a: number };

function parseColor(value: string): Rgb | null {
  const color = value.trim();
  if (color.startsWith("#")) {
    let hex = color.slice(1);
    if (hex.length === 3) hex = hex.split("").map((part) => part + part).join("");
    if (hex.length !== 6) return null;
    return {
      r: Number.parseInt(hex.slice(0, 2), 16),
      g: Number.parseInt(hex.slice(2, 4), 16),
      b: Number.parseInt(hex.slice(4, 6), 16),
      a: 1,
    };
  }

  const match = color.match(
    /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+%?))?\s*\)/i,
  );
  if (!match) return null;
  const alpha = match[4];
  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
    a: alpha === undefined ? 1 : alpha.endsWith("%") ? Number(alpha.slice(0, -1)) / 100 : Number(alpha),
  };
}

function wantsWhiteCursor(color: Rgb) {
  const { r, g, b } = color;
  const orange = r > 190 && g < 160 && b < 110 && r - g > 70;
  if (orange) return false;
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.62;
}

function surfaceColor(element: Element): Rgb | null {
  if (element instanceof HTMLElement) {
    if (element.dataset.cursor === "dark") return { r: 0, g: 0, b: 0, a: 1 };
    if (element.dataset.cursor === "light") return { r: 255, g: 255, b: 255, a: 1 };

    const style = getComputedStyle(element);
    const isFill = element.classList.contains("fill-btn") || element.classList.contains("pd-btn");
    if (isFill) {
      const full = style.backgroundSize.split(",")[0]?.trim().startsWith("100%");
      const token = element.classList.contains("fill-btn")
        ? full
          ? "--fill-hover"
          : "--fill-rest"
        : full
          ? "--pd-hover"
          : "--pd-rest";
      const painted = parseColor(style.getPropertyValue(token));
      if (painted) return painted;
    }
  }

  const background = parseColor(getComputedStyle(element).backgroundColor);
  if (background && background.a > 0.15) return background;
  return null;
}

function whiteCursorAt(x: number, y: number) {
  const hit = document.elementsFromPoint(x, y).find(
    (node) =>
      !node.classList.contains("custom-cursor") &&
      !node.classList.contains("custom-cursor-dot") &&
      !node.classList.contains("custom-cursor-ring"),
  );
  if (!hit) return true;

  let node: Element | null = hit;
  while (node) {
    const color = surfaceColor(node);
    if (color) return wantsWhiteCursor(color);
    if (node === document.body) break;
    node = node.parentElement;
  }

  return true;
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const place = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
      setOnDark(whiteCursorAt(event.clientX, event.clientY));
      setVisible(true);
    };

    const onOver = (event: MouseEvent) => {
      const targetNode = event.target;
      if (!(targetNode instanceof Element)) return;
      setHovering(
        Boolean(targetNode.closest("a, button, [role='button'], input, textarea, select, label, summary")),
      );
    };
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    let frame = 0;
    const follow = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      frame = requestAnimationFrame(follow);
    };

    window.addEventListener("mousemove", place, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);
    frame = requestAnimationFrame(follow);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", place);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`custom-cursor ${visible ? "is-visible" : ""} ${hovering ? "is-hovering" : ""} ${
        onDark ? "is-on-dark" : "is-on-light"
      }`}
      aria-hidden="true"
    >
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </div>
  );
}
