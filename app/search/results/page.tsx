"use client";
import React from "react";
import { useDataStore, useQueryStore } from "@/store/store";
import ExpandableCardDemo from "@/components/expandable-card-demo-standard";
import Button from "@/components/Button";
import { unparse } from "papaparse";

function ResultsPage() {
  const queryStore = useQueryStore();
  const journalistsData = useDataStore().getData() || [];
  console.log("Journalists Data:", journalistsData);

  const cards = journalistsData.map(journalist => ({
    "Full Name": journalist["Full Name"] || "N/A",
    Designation: journalist.Designation || "N/A",
    "Primary Beat": journalist["Primary Beat"] || "N/A",
    "Secondary Beat": journalist["Secondary Beat"] || "N/A",
    "Twitter Handle": journalist["Twitter Handle"] || "N/A",
    "Follower Count": journalist["Follower Count"] || "N/A",
    "Geographic Coverage": journalist["Geographic Coverage"] || "N/A",
    "Contact Status": journalist["Contact Status"] || "N/A",
    "Key Credentials Summary": journalist["Key Credentials Summary"] || "N/A",
    "Notable Previous Organizations": journalist["Notable Previous Organizations"] || "N/A",
    Awards: journalist.awards || "N/A",
  }));
  console.log("Cards Data:", cards);

  const handleDownload = () => {
    const csv = unparse(journalistsData);
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `journalists_${queryStore.query}.csv`;
    link.click();
  };

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-28 flex flex-col justify-center bg-linear-to-br from-gray-900 via-green-950 to-black">
      {/* Header with subtle animation */}
      <header className="mb-20 animate-fade-in flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white tracking-tight">
            Search Results
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-300 font-light">
            for:{" "}
            <span className="italic text-cyan-300">{queryStore.query}</span>
          </p>
          <div className="mt-4 h-px w-32 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
        </div>
        <div onClick={handleDownload} >
          <Button text="Download the Data" />
        </div>
      </header>

      {/* Results section */}
      <section className="flex-1">
        {cards.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No journalists found.</p>
          </div>
        ) : (
          <ExpandableCardDemo cards={cards} />
        )}
      </section>

      {/* Footer hint */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        Scroll to explore more results
      </footer>
    </div>
  );
}

export default ResultsPage;
