"use client";

import { getPhaseForDay } from "@/lib/cycle-data";

interface DotGridProps {
  currentDay?: number;
  size?: "sm" | "md" | "lg";
}

export function DotGrid({ currentDay = 1, size = "md" }: DotGridProps) {
  const dotSizes = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  const gaps = {
    sm: "gap-1.5",
    md: "gap-2",
    lg: "gap-3",
  };

  return (
    <div className={`grid grid-cols-7 ${gaps[size]}`}>
      {Array.from({ length: 28 }, (_, i) => {
        const day = i + 1;
        const phase = getPhaseForDay(day);
        const isCurrentDay = day === currentDay;
        const isPastDay = day < currentDay;

        return (
          <div
            key={day}
            className={`${dotSizes[size]} rounded-full transition-all ${
              isCurrentDay ? "scale-125" : ""
            }`}
            style={{
              backgroundColor: phase.color,
              opacity: isPastDay ? 0.4 : isCurrentDay ? 1 : 0.25,
              boxShadow: isCurrentDay
                ? `0 0 12px ${phase.color}, 0 0 0 2px var(--cream), 0 0 0 4px ${phase.color}`
                : undefined,
            }}
            title={`Day ${day} - ${phase.name}`}
          />
        );
      })}
    </div>
  );
}
