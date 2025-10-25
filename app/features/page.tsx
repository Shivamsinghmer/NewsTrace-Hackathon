"use client";


function page() {
  return (
    <section
        id="features"
        className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20 md:py-32 overflow-hidden"
      >
        {/* Animated Gradient Orb */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-green-500/20 via-transparent to-violet-500/20 blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-green-300 to-white bg-clip-text text-transparent">
            Everything You Need to Understand the News Ecosystem
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed">
            From real-time discovery to rich visualizations — NewsTrace gives
            you the tools to map journalist networks, track beats, and surface
            stories before they trend.
          </p>

          {/* Feature Cards */}
          {/* Feature & Trust Section */}
          <section className="text-white px-6 py-20 md:py-32">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
              {/* Left – Feature Card */}
              <div className="w-full md:w-1/3 group bg-white/5 backdrop-blur-md border flex flex-col items-center justify-center border-white/10 rounded-3xl p-8 hover:border-green-400/50 hover:-translate-y-2 transition-all duration-300 shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-400/30 mb-6">
                  <svg
                    className="w-8 h-8 text-violet-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 28 28"
                    aria-hidden
                  >
                    <path
                      d="M14 18.667V24.5m4.668-8.167V24.5m4.664-12.833V24.5m2.333-21L15.578 13.587a.584.584 0 0 1-.826 0l-3.84-3.84a.583.583 0 0 0-.825 0L2.332 17.5M4.668 21v3.5m4.664-8.167V24.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Real-Time Discovery
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Autonomous crawler surfaces journalist profiles and article
                  metadata the moment they hit the web.
                </p>
              </div>

              {/* Right – Trust Block */}
              <div className="w-full h-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
                <p className="bg-gradient-to-r from-slate-800 via-[#4D6EA3] to-slate-800 text-transparent bg-clip-text text-3xl md:text-4xl font-extrabold tracking-tight">
                  Trusted by the world’s leading newsrooms
                </p>
                {/* Single-line logo strip */}
                <div className="flex h-26 items-center justify-center md:justify-start gap-6 mt-5 w-full overflow-x-auto">
                  {/* BBC */}
                  <img
                    src="/BBC.png"
                    alt="BBC"
                    className="h-12 md:h-16 aspect-video invert object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 shrink-0"
                  />
                  {/* Times of India */}
                  <img
                    src="/TimesOfIndia.jpg"
                    alt="Times of India"
                    className="h-12 md:h-16 aspect-video object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 shrink-0"
                  />
                  {/* The Hindu */}
                  <img
                    src="/hindu.png"
                    alt="The Hindu"
                    className="h-12 md:h-16 aspect-video invert object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 shrink-0"
                  />
                  {/* CNN */}
                  <img
                    src="/cnn.png"
                    alt="CNN"
                    className="h-12 md:h-16 aspect-video object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 shrink-0"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
  )
}

export default page