"use client";

import { useEffect } from "react";

export default function VisitTracker() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("resume_visited")) return;
      sessionStorage.setItem("resume_visited", "1");
      fetch("/api/visits", { method: "POST" }).catch(() => {});
    } catch {
      /* ignore */
    }
  }, []);
  return null;
}
