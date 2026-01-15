export interface Phase {
  name: string;
  season: string;
  days: [number, number]; // [start, end] inclusive
  intentions: string[];
  color: string;
}

export const phases: Phase[] = [
  {
    name: "Menstrual",
    season: "Inner Winter",
    days: [1, 7],
    intentions: ["rest", "withdraw", "reflect"],
    color: "#C94A4A",
  },
  {
    name: "Follicular",
    season: "Inner Spring",
    days: [8, 13],
    intentions: ["create", "initiate", "explore"],
    color: "#7EB87E",
  },
  {
    name: "Ovulatory",
    season: "Inner Summer",
    days: [14, 17],
    intentions: ["connect", "express", "radiate"],
    color: "#8B7BB5",
  },
  {
    name: "Luteal",
    season: "Inner Autumn",
    days: [18, 28],
    intentions: ["complete", "organize", "nest"],
    color: "#7BAFD4",
  },
];

// Grouped by wallpaper resolution
export const iphoneModels = [
  // 1320 × 2868 px
  {
    id: "17-pro-max",
    label: "iPhone 17 Pro Max / 17 Air",
    dimensions: "1320 × 2868 px",
  },
  { id: "16-pro-max", label: "iPhone 16 Pro Max", dimensions: "1320 × 2868 px" },
  // 1290 × 2796 px
  {
    id: "17",
    label: "iPhone 17 / 17 Pro",
    dimensions: "1290 × 2796 px",
  },
  {
    id: "16-plus",
    label: "iPhone 16 Plus / 15 Plus / 15 Pro Max / 14 Pro Max",
    dimensions: "1290 × 2796 px",
  },
  // 1206 × 2622 px
  { id: "16-pro", label: "iPhone 16 Pro", dimensions: "1206 × 2622 px" },
  // 1179 × 2556 px
  {
    id: "15",
    label: "iPhone 16 / 15 / 15 Pro / 14 Pro",
    dimensions: "1179 × 2556 px",
  },
  // 1284 × 2778 px
  {
    id: "14-plus",
    label: "iPhone 14 Plus / 13 Pro Max",
    dimensions: "1284 × 2778 px",
  },
  // 1170 × 2532 px
  {
    id: "14",
    label: "iPhone 14 / 13 / 13 Pro",
    dimensions: "1170 × 2532 px",
  },
  // 1080 × 2340 px
  { id: "13-mini", label: "iPhone 13 Mini", dimensions: "1080 × 2340 px" },
] as const;

export type IphoneModel = (typeof iphoneModels)[number]["id"];

export function getPhaseForDay(day: number): Phase {
  return phases.find((p) => day >= p.days[0] && day <= p.days[1]) ?? phases[0];
}

export function calculateCycleDay(startDate: Date, currentDate: Date): number {
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  const current = new Date(currentDate);
  current.setHours(0, 0, 0, 0);

  const diffTime = current.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Cycle day is 1-indexed, loops every 28 days
  return ((diffDays % 28) + 28) % 28 + 1;
}
