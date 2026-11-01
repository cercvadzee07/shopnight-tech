import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#05080c]/80 backdrop-blur-xl border-t border-white/5 mt-20">
      {/* ანიმაციური RGB ხაზი ფუთერის თავში (Navbar-ის სარკისებურად) */}
      <div
        className="absolute top-0 left-0 h-[2px] w-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        style={{
          background:
            "linear-gradient(90deg, #00f0ff, #8a2be2, #ff003c, #00f0ff)",
          backgroundSize: "300% 100%",
          animation: "rgb-line 4s linear infinite",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 1. ლოგო და ბრენდის აღწერა */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="group flex items-center text-2xl font-black tracking-[0.2em] w-fit"
            >
              <span className="relative">
                <span className="text-white group-hover:opacity-0 transition-opacity duration-500">
                  SHOP
                </span>
                <span
                  className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, #00f0ff, #8a2be2, #ff003c, #00f0ff)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "rgb-line 4s linear infinite",
                  }}
                >
                  SHOP
                </span>
              </span>
              <span className="relative drop-shadow-[0_0_10px_rgba(0,240,255,0.4)] group-hover:drop-shadow-none transition-all duration-500">
                <span
                  className="inline-block group-hover:opacity-0 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, #00f0ff, #8a2be2, #ff003c, #00f0ff)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "rgb-line 4s linear infinite",
                  }}
                >
                  NIGHT
                </span>
                <span className="absolute left-0 top-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  NIGHT
                </span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium Gaming Gear & Cyberpunk Aesthetics. Level up your setup
              with next-gen technology.
            </p>
          </div>

          {/* 2. სწრაფი ლინკები */}
          <div className="flex flex-col gap-5 md:pl-10">
            <h3 className="text-white font-bold tracking-[0.2em] uppercase text-xs">
              ნავიგაცია
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link
                href="/catalog"
                className="relative group hover:text-white transition-colors duration-300 w-fit"
              >
                კატალოგი
                <span
                  className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{
                    background:
                      "linear-gradient(90deg, #00f0ff, #8a2be2, #ff003c)",
                    backgroundSize: "300% 100%",
                    animation: "rgb-line 4s linear infinite",
                  }}
                ></span>
              </Link>
              <Link
                href="/about"
                className="relative group hover:text-white transition-colors duration-300 w-fit"
              >
                ჩვენ შესახებ
                <span
                  className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{
                    background:
                      "linear-gradient(90deg, #00f0ff, #8a2be2, #ff003c)",
                    backgroundSize: "300% 100%",
                    animation: "rgb-line 4s linear infinite",
                  }}
                ></span>
              </Link>
            </div>
          </div>

          {/* 3. კონტაქტი / Social */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold tracking-[0.2em] uppercase text-xs">
              შემოგვიერთდი
            </h3>
            <div className="flex gap-4">
              <button className="relative group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff] to-[#8a2be2] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {/* Discord Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-gray-400 group-hover:text-white relative z-10 transition-colors duration-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.19-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 4. საავტორო უფლებები & NEONDEV */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 ShopNight Tech. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] font-black tracking-[0.2em] drop-shadow-[0_0_8px_rgba(138,43,226,0.5)]">
              NEONDEV
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
