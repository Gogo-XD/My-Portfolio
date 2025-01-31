"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/minimal";
  }, []);

  return <main className="relative min-h-screen w-full"></main>;
}
