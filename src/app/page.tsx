"use client";

import { useState } from "react";
import Hero from "./hero/hero";
import Image from "next/image";
import "./hero/scss/hero.scss";
import Footer from "./hero/forms/footer";
import Header from "./hero/forms/header";

export default function Home() {


  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans dark:bg-black">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white text-gray-800 shadow-md">
        <Header />
      </header>

      <main className="flex-1">
        <Hero />
      </main>

      <footer className="bg-gray-900 text-gray-400">
        <Footer />
      </footer>

    </div>
  );
}