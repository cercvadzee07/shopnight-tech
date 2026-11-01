"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  // 3D Tilt ეფექტისთვის კოორდინატების მართვა
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const centerX = box.width / 2;
    const centerY = box.height / 2;

    // გამოვთვალოთ ბრუნვის კუთხეები
    const rX = -(y - centerY) / 10;
    const rY = (x - centerX) / 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-6 py-12">
      {/* ანიმაციური Cyber ფონი (მოძრავი ნეონის ლაქები) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8a2be2]/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* მარცხენა მხარე: სათაური და ქოლ-თუ-აქვთი */}
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-[#00f0ff] uppercase shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping"></span>
            Next-Gen Gaming Gear
          </div>

          <h1 className="text-5xl lg:text-7xl font-black tracking-wider uppercase leading-none">
            Level Up Your <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff003c]"
              style={{
                backgroundSize: "300% 100%",
                animation: "rgb-line 4s linear infinite",
              }}
            >
              Cyber Setup
            </span>
          </h1>

          <p className="text-gray-400 text-base lg:text-lg max-w-xl leading-relaxed">
            აღმოაჩინე პრემიუმ კლასის გეიმინგ ტექნიკა. უმაღლესი წარმადობა,
            ფუტურისტული დიზაინი და კიბერპანკ ესთეტიკა შექმნილი α-სტანდარტებით.
          </p>

          <div className="flex items-center gap-5 pt-4">
            <Link
              href="/catalog"
              className="relative group px-8 py-4 rounded-sm bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-black font-bold uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]"
            >
              <span className="relative z-10">კატალოგის ნახვა</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/about"
              className="px-8 py-4 rounded-sm bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 hover:border-[#00f0ff] transition-all duration-300"
            >
              შესახებ
            </Link>
          </div>
        </div>

        {/* მარჯვენა მხარე: 3D Tilt ბანერი */}
        <div className="flex justify-center perspective-1000">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: "transform 0.1s ease-out",
            }}
            className="relative w-full max-w-md h-[420px] rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer group flex flex-col justify-between overflow-hidden"
          >
            {/* მანათობელი გრადიენტული ფონი ბარათის შიგნით */}
            <div className="absolute -inset-px bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff003c] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm pointer-events-none"></div>

            {/* ბარათის შიგთავსი */}
            <div className="relative z-10 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-[#00f0ff] font-bold">
                Featured Product
              </span>
              <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs text-gray-300">
                LIMITED EDITION
              </span>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center py-6">
              {/* გეიმინგ აიქონი / ილუსტრაცია */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#00f0ff]/20 to-[#8a2be2]/20 border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)] group-hover:scale-110 transition-transform duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-[#00f0ff]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-2xl font-black tracking-wider text-white group-hover:text-[#00f0ff] transition-colors">
                NEONDEV X-PRO
              </h3>
              <p className="text-xs text-gray-400">
                Cyberpunk Mechanical Keyboard & Audio Suite
              </p>
              <div className="flex justify-between items-center pt-2 border-t border-white/10">
                <span className="text-lg font-bold text-white">₾499.00</span>
                <span className="text-xs text-[#00f0ff] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  შეძენა →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
