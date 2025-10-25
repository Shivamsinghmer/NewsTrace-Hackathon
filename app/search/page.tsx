"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDataStore, useQueryStore } from "../../store/store";
import { useState } from "react";

function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Use Zustand store to save the webhook response data
  const dataStore = useDataStore();
  const queryStore = useQueryStore();

  const queryHandler = async () => {
    try {
      setLoading(true); // start loader
      const endpoint = process.env.NEXT_PUBLIC_WEBHOOK_PRODUCTION_URL;
      if (!endpoint) throw new Error("Missing webhook URL");

      const res = await axios.post(endpoint, { query: queryStore.query });

      // Store the received data in Zustand
      dataStore.setData(res.data);
      console.log(dataStore.getData());

      console.log("Webhook Data:", res.data); // log data

      // Redirect to results page after data is saved
      router.push("/search/results");
    } catch (err) {
      console.error(
        "Error:",
        (err as { response?: { status?: number } })?.response?.status ||
          (err as Error).message
      );
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <section className="max-h-screen bg-gradient-to-r from-black via-gray-900   to-black text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <main className="relative z-10 flex flex-col items-center justify-between max-w-5xl mx-auto px-6 py-20 md:py-40">
        <div className="flex flex-col items-center text-center w-full">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-green-400 to-white">
            Discover Journalists & Stories
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Enter a news outlet to instantly explore journalist profiles, beats,
            and their latest articles — all in one place.
          </p>

          <div className="mt-10 w-full max-w-2xl">
            <div className="relative group">
              <input
                type="text"
                value={queryStore.query}
                onChange={(e) => queryStore.setQuery(e.target.value)}
                className="w-full pl-5 pr-14 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                placeholder="Search outlet (e.g., Times of India, The Verge, BBC News)"
              />
              <button
                onClick={queryHandler}
                aria-label="Search"
                disabled={loading}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-green-600 hover:bg-green-500 rounded-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.417 11.667a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Zm0 0 5.25 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {!loading && (
              <p className="mt-4 text-md text-gray-400">
                Please enter the full outlet name. Ex: The Times of India.
              </p>
            )}

            {loading && (
              <p className="mt-4 text-md text-gray-400">
                Please wait, it could take upto 2 minute to process the request.
              </p>
            )}
            <p className="mt-4 text-sm text-gray-400">
              Example:{" "}
              <span
                className="text-green-400 cursor-pointer hover:underline"
                onClick={() => queryStore.setQuery("The Indian Express")}
              >
                The Indian Express
              </span>
              ,{" "}
              <span
                className="text-green-400 cursor-pointer hover:underline"
                onClick={() => queryStore.setQuery("Reuters")}
              >
                Reuters
              </span>
              , or{" "}
              <span
                className="text-green-400 cursor-pointer hover:underline"
                onClick={() => queryStore.setQuery("CNBC")}
              >
                CNBC
              </span>
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {[
              { icon: "🧾", label: "Journalist Profiles" },
              { icon: "📊", label: "Article Analytics" },
              { icon: "📍", label: "Beat Tracking" },
              { icon: "🔍", label: "Outlet Insights" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-400 cursor-pointer transition-all duration-300"
              >
                <span className="text-2xl mb-2">{item.icon}</span>
                <span className="text-gray-300 hover:text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-20 text-gray-500 text-sm">
          Powered by{" "}
          <span className="text-green-400 font-semibold">NewsTrace</span> • Data
          you can trust.
        </footer>
      </main>
    </section>
  );
}

export default Page;
