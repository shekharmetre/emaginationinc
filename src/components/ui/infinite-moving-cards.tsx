"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    text: string;
    name: string;
    event: string;
    rating: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const durationMap = {
    fast: 20,
    normal: 40,
    slow: 80,
  };

  return (
    <div
      className={cn(
        "scroller relative mx-auto z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <motion.ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        animate={{
          x: direction === "left" ? "-50%" : "0%",
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: durationMap[speed],
              ease: "linear",
            },
          },
        }}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <blockquote className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                "{item.text}"
              </blockquote>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.event}
                  </span>
                </span>
                <div className="flex items-center ml-auto">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
        {/* Duplicate items for seamless scroll */}
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={`${item.name}-duplicate-${idx}`}
            aria-hidden="true"
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <blockquote className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                "{item.text}"
              </blockquote>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.event}
                  </span>
                </span>
                <div className="flex items-center ml-auto">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
