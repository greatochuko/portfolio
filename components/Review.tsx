"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import FullScreenReview from "./FullScreenReview";

export type ReviewType = {
  rating: number;
  message: string;
  clientName: string;
  profilePicture: string;
  projectName: string;
  projectSlug: string;
};

export default function Review({ review }: { review: ReviewType }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-6 rounded-lg bg-muted p-6 sm:p-8">
        <div className="flex items-center gap-2">
          {new Array(review.rating).fill("").map((_, i) => (
            <FaStar key={i} className="h-4 w-4 fill-accent-green-100" />
          ))}
        </div>
        <p className="text-sm leading-6 text-accent-gray">
          {review.message.length > 100 ? (
            <>
              {review.message.slice(0, 200)}{" "}
              <span>
                ...{" "}
                <button
                  onClick={() => setReadMore((prev) => !prev)}
                  className="text-accent-green-100 hover:underline"
                >
                  Read More
                </button>
              </span>
            </>
          ) : (
            review.message
          )}
        </p>
        <div className="flex items-center gap-2">
          <Image
            src={review.profilePicture}
            alt={review.clientName}
            width={42}
            height={42}
            className="overflow-hidden rounded-lg bg-neutral-700 object-cover"
          />
          <div className="flex flex-col">
            <h3>{review.clientName}</h3>
            <Link
              href={`/works/${review.projectSlug}`}
              className="text-sm text-accent-gray hover:underline"
            >
              {review.projectName}
            </Link>
          </div>
        </div>
      </div>

      <FullScreenReview
        closeModal={() => setReadMore(false)}
        open={readMore}
        review={review}
      />
    </>
  );
}
