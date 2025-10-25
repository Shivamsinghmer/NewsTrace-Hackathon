"use client";
import React from 'react'

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";


function page() {
  return (
    <section
        id="about"
        className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-white via-green-300 to-white bg-clip-text text-transparent">
            Built for Newsrooms, Analysts & Data Teams
          </h2>
          <p className="text-slate-300 text-center mt-4 max-w-2xl mx-auto leading-relaxed">
            NewsTrace autonomously surfaces journalist profiles, maps beats, and
            visualizes newsroom ecosystems — all from public web data, in real
            time.
          </p>

          {/* Two-column layout */}
          <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
            {/* Left: image */}
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder gradient — add an <img> or <Image> here if you have one */}
              <HeroVideoDialog
                animationStyle="top-in-bottom-out"
                videoSrc="/NewsTrace__Media_Intelligence.mp4"
                thumbnailSrc="/info.jpg"
                thumbnailAlt="Hero Video"
              />
            </div>

            {/* Right: features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">What you get</h3>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-400/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-100">
                    Lightning-Fast Insights
                  </h4>
                  <p className="text-sm text-slate-400">
                    Real-time discovery and analysis of journalist profiles and
                    article metadata.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-400/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-100">
                    Rich Visualizations
                  </h4>
                  <p className="text-sm text-slate-400">
                    Interactive network graphs and topic maps that reveal hidden
                    relationships across newsrooms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-400/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-100">
                    Plug-and-Play API
                  </h4>
                  <p className="text-sm text-slate-400">
                    Drop our endpoints into any React, Next.js or Python
                    workflow with zero config.
                  </p>
                </div>
              </div>

              <button className="mt-6 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all text-sm font-semibold">
                Explore the docs →
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default page