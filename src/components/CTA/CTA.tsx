"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./CTA.module.css";

export default function CTA() {
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const text = useRef<HTMLParagraphElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!title.current || !text.current || !button.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        title.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          text.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          button.current,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8 },
          "-=0.4"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.cta} ref={container}>
      <div className={styles.content}>
        <h2 ref={title} className={styles.title}>
          Ready to Prove Yourself?
        </h2>

        <p ref={text} className={styles.text}>
          Join 50,000+ competitive learners worldwide. The Arena is waiting
          for its next champion.
        </p>

        <button ref={button} className={styles.button}>
          Create Free Account
        </button>
      </div>

      <div className={styles.trophy}></div>
    </section>
  );
}