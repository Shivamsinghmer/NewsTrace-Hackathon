"use client";

import React, { useState, useEffect } from "react";

import Galaxy from "@/components/Galaxy";
import ClickSpark from "@/components/ClickSpark";
import { ArrowBigDownIcon } from "lucide-react";
import { CrowdCanvas, Skiper39 } from "@/components/ui/skiper-ui/skiper39";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerPlayButton,
  VideoPlayerTimeRange,
  VideoPlayerMuteButton,
} from "@/components/ui/skiper-ui/skiper67";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import Link from "next/link";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ClickSpark
      sparkSize={18}
      sparkRadius={40}
      sparkCount={11}
      duration={500}
      extraScale={0.8}
    >
      {/* Hero Section */}
      <div className="w-screen h-screen relative overflow-hidden">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={3}
          glowIntensity={0.3}
          saturation={0}
          hueShift={0}
          repulsionStrength={0.3}
          starSpeed={0.6}
        />

        {/* Sticky Nav with subtle blur */}

        {/* Hero Section */}
        <section
          className={`absolute inset-0 flex flex-col items-center justify-center max-md:px-4 text-white transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Community Badge with hover pulse */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-green-400/30 bg-green-500/10 text-xs backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer shadow-lg">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop",
              ].map((src, i) => (
                <img
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white/80 object-cover"
                  src={src}
                  alt={`User ${i + 1}`}
                />
              ))}
            </div>
            <span className="pl-2 pr-1">
              Trusted by journalists, analysts, and data teams
            </span>
          </div>

          {/* Hero Heading with gradient animation */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-extrabold max-w-4xl mt-8 bg-gradient-to-r from-white via-green-300 to-white bg-clip-text text-transparent">
            Discover the People Behind Every Big Headline.
          </h1>

          {/* Hero Subtext */}
          <p className="text-slate-300 md:text-md max-w-2xl text-center mt-6 leading-relaxed">
            NewsTrace autonomously discovers journalist profiles, analyzes beats
            and topics, and visualizes newsroom ecosystems — all from public web
            data, in real time.
          </p>

          {/* CTA Buttons with hover lift */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-10 text-sm">
            <Link
              href="/search"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-xl hover:shadow-green-500/40 hover:-translate-y-1 transition-all"
              aria-label="Get Started"
            >
              Get Started
            </Link>
            <button
              className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3 hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 transition-all"
              aria-label="Learn More"
            >
              <span>Learn More</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 6 8"
                aria-hidden
              >
                <path
                  d="M1.25.5 4.75 4l-3.5 3.5"
                  strokeOpacity=".6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 mt-10 px-4">
            {/* BBC */}
            <img
              src="/BBC.png"
              alt="BBC"
              className="h-12 md:h-16 aspect-video invert object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            />
            {/* Times of India */}
            <img
              src="/TimesOfIndia.jpg"
              alt="Times of India"
              className="h-12 md:h-16 aspect-video object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            />
            {/* The Hindu */}
            <img
              src="/hindu.png"
              alt="The Hindu"
              className="h-12 md:h-16 aspect-video invert object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            />
            {/* CNN */}
            <img
              src="/cnn.png"
              alt="Media Partner"
              className="h-12 md:h-16 aspect-video object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            />
          </div>
        </section>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs animate-bounce">
          <div className="flex flex-col items-center justify-center text-white gap-2">
            <div className="flex items-center gap-2">
              <span>Scroll to explore</span>
              <ArrowBigDownIcon aria-hidden />
            </div>
          </div>
        </div>
      </div>

      {/* About section */}
      <section
        
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

      {/* Features section */}
      <section
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

      {/* Contact Section */}
      <section
        className="relative bg-gradient-to-b from-black via-gray-900 to-black min-h-screen w-full text-white overflow-hidden"
      >
        {/* Subtle animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-4 flex flex-col items-start lg:mb-56 md:mb-56">
            <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-300 text-sm font-medium border border-green-400/30">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
              Let’s Build Smarter Media Intelligence Together
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Have questions, partnership ideas, or need support? We’re here to
              help. Reach out to our team and we’ll get back to you within 24
              hours.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=40",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1887",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=40",
                ].map((src, i) => (
                  <img
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white/80 object-cover"
                    src={src}
                    alt={`Support ${i + 1}`}
                  />
                ))}
              </div>
              <span className="text-xs text-slate-400">
                24-hour human support
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <form className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-200 mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ada Lovelace"
                  className="peer w-full h-12 pl-12 pr-4 bg-white/10 text-white rounded-full border border-white/20 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 outline-none transition"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 peer-focus:text-green-400 transition"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-200 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ada@example.com"
                  className="peer w-full h-12 pl-12 pr-4 bg-white/10 text-white rounded-full border border-white/20 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 outline-none transition"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 peer-focus:text-green-400 transition"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-200 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us how we can help..."
                className="w-full p-4 bg-white/10 text-white rounded-2xl border border-white/20 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 outline-none resize-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5 transition"
            >
              Send Message
              <svg
                className="w-5 h-5 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>

        {/* CrowdCanvas background */}
        <div className="absolute bottom-0 left-0 w-full h-96 pointer-events-none">
          <CrowdCanvas src="/all-peeps.png" rows={15} cols={7} />
        </div>
      </section>
    </ClickSpark>
  );
}
