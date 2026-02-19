"use client";

import { useEffect, useState } from "react";

type BlurTextProps = {
  text: string;
  className?: string;
  stagger?: number;
};

export default function BlurText({ text, className = "", stagger = 0.08 }: BlurTextProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const lines = text.split("\n");
  let wordIndex = 0;

  return (
    <span className={`blur-text-wrapper ${animate ? "blur-text-animate" : ""} ${className}`}>
      {lines.map((line, lineIdx) => {
        const words = line.split(" ");
        return (
          <span key={`line-${lineIdx}`}>
            {words.map((word, i) => {
              const delay = `${wordIndex * stagger}s`;
              wordIndex += 1;
              return (
                <span
                  key={`word-${lineIdx}-${i}`}
                  className="blur-text-word"
                  style={{ animationDelay: delay }}
                >
                  {word}
                  {i < words.length - 1 ? "\u00A0" : ""}
                </span>
              );
            })}
            {lineIdx < lines.length - 1 ? <br /> : null}
          </span>
        );
      })}
    </span>
  );
}
