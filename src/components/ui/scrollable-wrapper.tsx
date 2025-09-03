import React from "react";

interface ScrollableCardWrapperProps {
  children: React.ReactNode;
  className: string
}

export function ScrollableCardWrapper({ children, className }: ScrollableCardWrapperProps) {
  return (
    <div className={`overflow-x-auto scrollbar-hide ${className}`}>
      <div
        className="
          flex gap-6
          sm:[&>*]:min-w-[70%]     /* 1.5 cards */
          md:[&>*]:min-w-[30%]     /* 3.5 cards */
          lg:[&>*]:min-w-[22%]     /* 4.5 cards */
        "
      >
        {children}
      </div>
    </div>
  );
}
