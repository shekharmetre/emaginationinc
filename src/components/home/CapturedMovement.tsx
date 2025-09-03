"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

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



interface CapturedMovementProps {
  movementdata: any[];
}

// Fetch function for mutation
async function fetchMovements({ page, category }: { page: number; category: string }) {
  const res = await fetch("/api/movement", {
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

export default function CapturedMovement({ movementdata }: CapturedMovementProps) {
  const [selectedEvent, setSelectedEvent] = useState<string>("wedding");
  const [page, setPage] = useState<number>(1);
  const [capturedEvents, setCapturedEvents] = useState<any[]>(movementdata || []);

  const mutation = useMutation({
    mutationFn: ({ page, category }: { page: number; category: string }) =>
      fetchMovements({ page, category }),
    onSuccess: (newData, variables) => {
      if (variables.page === 1) {
        setCapturedEvents(newData); // reset list on first page
      } else {
        setCapturedEvents((prev) => [...prev, ...newData]); // append next page
      }
    },
    onError: (error: any) => {
      console.error("Error fetching movements:", error.message);
    },
  });

  // When event changes, reset page and fetch first page
  useEffect(() => {
    setPage(1);
    mutation.mutate({ page: 1, category: selectedEvent });
  }, [selectedEvent]);

  // Load More
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    mutation.mutate({ page: nextPage, category: selectedEvent });
  };

  return (
    <div className="md:max-w-6xl mx-auto md:p-4 p-1 text-center">
      <h1 className="md:text-5xl text-4xl font-bold">
        Captured{" "}
        <span className="bg-gradient-to-r from-pink-600 to-red-400 bg-clip-text text-transparent">
          Movement
        </span>{" "}
        Of Joy
      </h1>

      {/* Event Names */}
      <div className="flex flex-wrap justify-center md:gap-6 gap-4 mt-6">
        {eventNames.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedEvent(item)}
            className="relative cursor-pointer text-emerald-700 font-medium text-base md:text-lg"
          >
            {item}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-700 transition-all duration-300 ease-in-out ${selectedEvent === item ? "w-full" : "w-0"
                }`}
            />
          </button>
        ))}
      </div>

      {/* Images Section */}
      {capturedEvents.length > 0 && (
        <div className="p-2 mt-8 grid md:grid-cols-3 grid-cols-2 lg:grid-cols-3 gap-4">
          {capturedEvents.map((src, idx) => (
            <div
              key={`${src.filename}-${idx}`}
              className="relative w-full h-40 md:h-48 overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={src.url}
                alt={`${selectedEvent} ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {capturedEvents.length > 0 && (
        <div className="mt-6">
          <Button
            variant="gold"
            onClick={handleLoadMore}
            disabled={mutation.isPending}
            className="cursor-pointer"
          >
            {mutation.isPending ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}

      {/* Error Message */}
      {mutation.isError && (
        <p className="text-red-500 mt-4">{(mutation.error as Error).message}</p>
      )}
    </div>
  );
}
