"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

// Ensures every Framer Motion animation site-wide (not just plain CSS
// transitions) respects the visitor's OS-level reduced-motion preference.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
