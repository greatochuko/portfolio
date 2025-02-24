import React from "react";
import reviews from "@/data/reviews.json";
import Review from "./Review";

export default function ClientReviewsSection() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-medium">Kind Words from Clients</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {reviews.map((review, i) => (
          <Review review={review} key={i} />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-accent-gray">
        <hr className="hidden flex-1 border-dashed border-[#666] sm:block" />
      </div>
    </section>
  );
}
