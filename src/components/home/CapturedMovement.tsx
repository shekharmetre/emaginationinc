"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const eventNames: string[] = [
  "Birthday Party",
  "Wedding Ceremony",
  "Corporate Event",
  "Engagement Party",
  "Launch",
  "Graduation Party",
  "Festival Celebration",
  "Music Concert",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
interface MovementImage {
  id: string;
  name: string;
  filename: string;
  format: string;
  url: string;
}

interface CapturedMovementProps {
  // If you want to accept initial props, can add here
}

async function fetchMovements({
  page,
  category,
}: {
  page: number;
  category: string;
}) {
  const res = await fetch(`/api/movement`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ page, category, limit: 10, folder: "emaginations-images/all" }),
  });

  if (!res.ok) throw new Error("Failed to fetch movements");

  const data = await res.json();
  return data.resources || [];
}

export default function CapturedMovement({ }: CapturedMovementProps) {
  const [selectedEvent, setSelectedEvent] = useState<string>("wedding");
  const [page, setPage] = useState<number>(1);
  const [capturedEvents, setCapturedEvents] = useState<MovementImage[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const hasLoadedRef = useRef(false);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({ page, category }: { page: number; category: string }) =>
      fetchMovements({ page, category }),
    onSuccess: (newData, variables) => {
      setErrorMessage(null);
      if (variables.page === 1) {
        setCapturedEvents(newData); // reset list on first page
      } else {
        setCapturedEvents((prev) => [...prev, ...newData]); // append next page
      }
    },
    onError: (error: Error) => {
      setErrorMessage(error.message);
    },
  });

  // Initial fetch on mount or when selectedEvent changes
  useEffect(() => {
    if (!hasLoadedRef.current) {
      hasLoadedRef.current = true;
      mutate({ page: 1, category: selectedEvent });
      setPage(1);
    }
  }, [selectedEvent, mutate]);

  // Load More handler
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    mutate({ page: nextPage, category: selectedEvent });
  };

  return (
    <motion.div
      className="md:max-w-6xl mx-auto md:p-4 p-1 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h1 variants={itemVariants} className="md:text-5xl text-4xl font-bold">
        Captured{" "}
        <span className="bg-gradient-to-r from-pink-600 to-red-400 bg-clip-text text-transparent">
          Movement
        </span>{" "}
        Of Joy
      </motion.h1>

      {/* Event Names */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-center md:gap-6 gap-4 mt-6"
      >
        {eventNames.map((item) => (
          <button
            key={item}
            onClick={() => {
              setSelectedEvent(item);
              hasLoadedRef.current = false; // reset fetch flag to allow new fetch on event change
            }}
            className="relative cursor-pointer text-emerald-700 font-medium text-base md:text-lg transition-transform hover:scale-105"
          >
            {item}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-700 transition-all duration-300 ease-in-out ${selectedEvent === item ? "w-full" : "w-0"
                }`}
            />
          </button>
        ))}
      </motion.div>

      {/* Images Section */}
      {capturedEvents.length > 0 && (
        <motion.div
          className="p-2 mt-8 grid md:grid-cols-3 grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {capturedEvents.map((src, idx) => (
            <motion.div
              variants={itemVariants}
              key={`${src.filename}-${idx}`}
              className="relative w-full h-40 md:h-48 overflow-hidden rounded-xl shadow-md transition-transform hover:scale-105"
            >
              <Image
                src={src.url}
                alt={`${selectedEvent} ${idx + 1}`}
                fill
                className="object-cover "
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Load More Button */}
      {capturedEvents.length > 0 && (
        <motion.div variants={itemVariants} className="mt-6">
          <Button
            variant="gold"
            onClick={handleLoadMore}
            disabled={isPending}
            className="cursor-pointer"
          >
            {isPending ? "Loading..." : "Load More"}
          </Button>
        </motion.div>
      )}

      {/* Error Message */}
      {(isError || errorMessage) && (
        <p className="text-red-500 mt-4">{errorMessage || (error as Error).message}</p>
      )}
    </motion.div>
  );
}
