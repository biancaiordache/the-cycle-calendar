import Image from "next/image";
import { UrlGenerator } from "@/components/url-generator";

export default function Home() {
  return (
    <div className="paper-texture min-h-screen bg-cream px-6 py-12 lg:flex lg:h-screen lg:items-center lg:justify-center lg:overflow-hidden lg:px-12 lg:py-0">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:pt-16">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            The Cycle Calendar
          </h1>
          <p className="mt-4 max-w-sm text-base text-dark/70 sm:text-lg">
            Tune into your body&apos;s rhythm.
          </p>
          <p className="mt-2 max-w-sm text-base text-dark/70 sm:text-lg">
            A wallpaper that shifts with your 28-day cycle.
          </p>

          {/* iPhone mockup */}
          <div className="mt-6 flex justify-center lg:mt-6">
            <Image
              src="/iphone-mockup.png"
              alt="iPhone showing cycle calendar wallpaper"
              width={300}
              height={612}
              className="w-48 drop-shadow-2xl sm:w-56 lg:w-[300px]"
              priority
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          {/* Season labels */}
          <div className="grid grid-cols-2 justify-items-center gap-3 text-sm sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-3 lg:justify-start">
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 shrink-0 rounded-full bg-menstrual"
                style={{ boxShadow: "0 0 8px 2px var(--menstrual)" }}
              />
              <span className="text-dark/70">Inner Winter</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 shrink-0 rounded-full bg-follicular"
                style={{ boxShadow: "0 0 8px 2px var(--follicular)" }}
              />
              <span className="text-dark/70">Inner Spring</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 shrink-0 rounded-full bg-ovulatory"
                style={{ boxShadow: "0 0 8px 2px var(--ovulatory)" }}
              />
              <span className="text-dark/70">Inner Summer</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 shrink-0 rounded-full bg-luteal"
                style={{ boxShadow: "0 0 8px 2px var(--luteal)" }}
              />
              <span className="text-dark/70">Inner Autumn</span>
            </div>
          </div>

          {/* Cycle awareness copy */}
          <p className="mt-4 text-center text-sm leading-relaxed text-dark/60 lg:text-left">
            Your body moves through four distinct phases each month, each with
            its own energy and needs. When you align your habits, movement, and
            nourishment with these natural rhythms, everything flows a little
            easier. This is cycle awareness—not tracking symptoms, but tuning in.
          </p>

          {/* Divider */}
          <div className="my-6 h-px bg-dark/10" />

          {/* Section header */}
          <h2 className="text-center font-serif text-xl font-semibold text-dark sm:text-2xl lg:text-left">
            Set Up Your Wallpaper
          </h2>
          <p className="mt-1 text-center text-sm text-dark/50 lg:text-left">(iOS only)</p>

          <div className="mt-4 flex justify-center lg:justify-start">
            <UrlGenerator />
          </div>
        </div>
      </div>
    </div>
  );
}
