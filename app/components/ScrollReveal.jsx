"use client";
import { useEffect, useRef } from "react";

/**
 * Wraps children in a div that fades/slides into view when scrolled into the viewport.
 * Uses IntersectionObserver — no library dependency.
 *
 * @param {string}  direction  "up" | "left" | "right" | "scale"
 * @param {number}  delay      ms before the transition starts (for stagger effects)
 * @param {string}  className  extra classes merged onto the wrapper div
 */
export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    className = "",
}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("sr-visible");
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`sr sr-${direction}${className ? ` ${className}` : ""}`}
            style={{ "--sr-delay": `${delay}ms` }}
        >
            {children}
        </div>
    );
}
