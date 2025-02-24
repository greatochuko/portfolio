import Image from "next/image";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { ReviewType } from "./Review";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function FullScreenReview({
  review,
  closeModal,
  open,
}: {
  review: ReviewType;
  open: boolean;
  closeModal(): void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div
      className={`fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black/50 backdrop-blur-sm duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      onClick={closeModal}
    >
      <div
        className="flex w-[90%] max-w-2xl flex-col gap-6 rounded-lg bg-muted p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          {new Array(review.rating).fill("").map((_, i) => (
            <FaStar key={i} className="h-4 w-4 fill-accent-green-100" />
          ))}
          <button className="group ml-auto p-1.5" onClick={closeModal}>
            <IoClose className="h-5 w-5 fill-accent-gray duration-200 group-hover:fill-white" />
          </button>
        </div>
        <p className="text-sm leading-6 text-accent-gray">{review.message}</p>
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
    </div>
  );
}
