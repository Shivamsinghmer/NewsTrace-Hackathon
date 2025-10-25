
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface Card {
  "Full Name": string;
  Designation: string;
  "Primary Beat": string;
  "Secondary Beat"?: string;
  "Twitter Handle"?: string;
  "Follower Count"?: string;
  "Geographic Coverage"?: string;
  "Contact Status"?: string;
  "Key Credentials Summary"?: string;
  "Notable Previous Organizations"?: string;
  Awards?: string;
  error?: boolean;
}

export default function ExpandableCardDemo({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState<Card | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  // Filter out any card that has an "error" property
  const validCards = cards.filter(card => !card.error);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    document.body.style.overflow = active && typeof active === "object" ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleContactClick = (handle: string | undefined) => {
    if (!handle) return;
    const url = handle.startsWith("@") ? `https://twitter.com/${handle.slice(1)}` : `https://twitter.com/${handle}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card View */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active["Full Name"]}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white/80 dark:bg-neutral-800/80 backdrop-blur rounded-full h-10 w-10 shadow-md"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active["Full Name"]}-${id}`}
              ref={ref}
              className="w-full max-w-lg h-full md:h-auto md:max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 space-y-4 overflow-y-auto">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <motion.h3
                      layoutId={`title-${active["Full Name"]}-${id}`}
                      className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100"
                    >
                      {active["Full Name"]}
                    </motion.h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                      {active.Designation}
                    </p>
                  </div>
                  {active["Twitter Handle"] && (
                    <motion.a
                      href={`https://twitter.com/${active["Twitter Handle"].replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 text-blue-500 hover:text-blue-600 transition-colors"
                      aria-label="Twitter"
                    >
                      <TwitterIcon />
                    </motion.a>
                  )}
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <Detail label="Primary Beat" value={active["Primary Beat"]} />
                  <Detail label="Secondary Beat" value={active["Secondary Beat"]} />
                  <Detail label="Twitter" value={active["Twitter Handle"]} />
                  <Detail label="Followers" value={active["Follower Count"]} />
                  <Detail label="Geographic Coverage" value={active["Geographic Coverage"]} />
                  <Detail label="Contact Status" value={active["Contact Status"]} />
                </div>

                {/* Longer fields */}
                <Detail label="Credentials" value={active["Key Credentials Summary"]} />
                <Detail label="Previous Orgs" value={active["Notable Previous Organizations"]} />
                <Detail label="Awards" value={active.Awards} />

                {/* Contact Button */}
                {active["Twitter Handle"] && (
                  <motion.button
                    onClick={() => handleContactClick(active["Twitter Handle"])}
                    className="mt-4 w-full px-4 py-2 text-sm rounded-full font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact on Twitter
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* List View */}
      <ul className="max-w-3xl mx-auto w-full gap-4 px-4">
        {cards.map((card, index) => {
          if (card.error) {
            // leave the space for invalid cards but render nothing
            return <li key={`card-${index}-${id}`} className="h-0" />;
          }
          return (
            <motion.li
              layoutId={`card-${card["Full Name"]}-${id}`}
              key={`card-${index}-${id}`}
              onClick={() => setActive(card)}
              className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-xl cursor-pointer border border-neutral-200 dark:border-neutral-800 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-800 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold text-lg">
                  {card["Full Name"]
                    .split(" ")
                    .map(n => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <div>
                  <motion.h3
                    layoutId={`title-${card["Full Name"]}-${id}`}
                    className="font-semibold text-neutral-900 dark:text-neutral-100"
                  >
                    {card["Full Name"]}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.Designation}-${id}`}
                    className="text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    {card.Designation}
                  </motion.p>
                  <div className="flex gap-2 mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <span>{card["Primary Beat"]}</span>
                    {card["Secondary Beat"] && (
                      <>
                        <span>•</span>
                        <span>{card["Secondary Beat"]}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <motion.button
                layoutId={`button-${card["Full Name"]}-${id}`}
                className="mt-4 md:mt-0 px-4 py-2 text-sm rounded-full font-medium bg-neutral-100 hover:bg-blue-500 hover:text-white text-neutral-800 dark:bg-neutral-800 dark:hover:bg-blue-600 dark:text-neutral-200 transition-colors"
              >
                View
              </motion.button>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
}

// Sub-component for detail rows
const Detail = ({ label, value }: { label: string; value?: string | null }) => {
  if (!value) return null;
  return (
    <div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">{label}</p>
      <p className="text-neutral-800 dark:text-neutral-200">{value}</p>
    </div>
  );
};

// 🔸 Close icon
export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-neutral-700 dark:text-neutral-300"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

// Twitter icon
const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.99-2.08z" />
  </svg>
);
