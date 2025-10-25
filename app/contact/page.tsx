"use client";
import React from 'react'

import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39";


function page() {
  return (
     <section
        id="contact"
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
  )
}

export default page