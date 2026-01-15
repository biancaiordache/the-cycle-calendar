import Link from "next/link";

export const metadata = {
  title: "iOS Shortcut Setup - The Cycle Calendar",
  description: "Step-by-step instructions to set up your daily wallpaper automation",
};

export default function SetupPage() {
  return (
    <div className="paper-texture min-h-screen bg-cream">
      <header className="px-6 py-12 text-center">
        <Link
          href="/"
          className="text-sm text-dark/60 hover:text-dark"
        >
          &larr; Back to home
        </Link>
        <h1 className="mt-6 font-serif text-3xl font-semibold text-dark md:text-4xl">
          iOS Shortcut Setup
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-dark/70">
          Follow these steps to set up your daily wallpaper automation. This
          takes about 2 minutes.
        </p>
      </header>

      <main className="mx-auto max-w-2xl px-6 pb-16">
        {/* Prerequisites */}
        <section className="mb-12 rounded-xl bg-paper p-6">
          <h2 className="font-serif text-xl font-semibold text-dark">
            Before You Start
          </h2>
          <ul className="mt-4 space-y-2 text-dark/80">
            <li className="flex gap-2">
              <span className="text-follicular">&#10003;</span>
              Make sure you have your personal URL copied from the homepage
            </li>
            <li className="flex gap-2">
              <span className="text-follicular">&#10003;</span>
              You&apos;ll need the Shortcuts app (pre-installed on iOS)
            </li>
          </ul>
        </section>

        {/* Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <section className="rounded-xl bg-paper p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark font-medium text-cream">
                1
              </span>
              <h3 className="font-serif text-lg font-semibold text-dark">
                Open the Shortcuts App
              </h3>
            </div>
            <p className="mt-4 text-dark/80">
              Open the <strong>Shortcuts</strong> app on your iPhone. If you
              can&apos;t find it, swipe down on your home screen and search for
              &ldquo;Shortcuts&rdquo;.
            </p>
          </section>

          {/* Step 2 */}
          <section className="rounded-xl bg-paper p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark font-medium text-cream">
                2
              </span>
              <h3 className="font-serif text-lg font-semibold text-dark">
                Go to Automation
              </h3>
            </div>
            <p className="mt-4 text-dark/80">
              Tap the <strong>Automation</strong> tab at the bottom of the
              screen.
            </p>
          </section>

          {/* Step 3 */}
          <section className="rounded-xl bg-paper p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark font-medium text-cream">
                3
              </span>
              <h3 className="font-serif text-lg font-semibold text-dark">
                Create New Automation
              </h3>
            </div>
            <div className="mt-4 space-y-3 text-dark/80">
              <p>
                Tap the <strong>+</strong> button in the top right corner.
              </p>
              <p>
                Select <strong>Time of Day</strong>.
              </p>
              <p>
                Set the time to <strong>6:00 AM</strong> (or your preferred
                wake-up time).
              </p>
              <p>
                Make sure <strong>Daily</strong> is selected.
              </p>
              <p>
                Select <strong>Run Immediately</strong>.
              </p>
              <p>
                Tap <strong>Next</strong>.
              </p>
            </div>
          </section>

          {/* Step 4 */}
          <section className="rounded-xl bg-paper p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark font-medium text-cream">
                4
              </span>
              <h3 className="font-serif text-lg font-semibold text-dark">
                Add &ldquo;Get Contents of URL&rdquo; Action
              </h3>
            </div>
            <div className="mt-4 space-y-3 text-dark/80">
              <p>
                Tap <strong>Create New Shortcut</strong>.
              </p>
              <p>
                Use the search bar at the bottom to search for{" "}
                <strong>&ldquo;Get Contents of URL&rdquo;</strong> and tap it to
                add.
              </p>
              <p>
                Tap the blue <strong>URL</strong> text and paste your personal
                wallpaper URL that you copied in the previous page.
              </p>
            </div>
            <div className="mt-4 rounded-lg bg-cream p-4">
              <p className="text-xs font-medium text-dark/60">Your URL format:</p>
              <code className="mt-1 block break-all text-sm text-dark">
                https://thecyclecalendar.com/wallpaper?start=YYYY-MM-DD&model=15
              </code>
            </div>
          </section>

          {/* Step 5 */}
          <section className="rounded-xl bg-paper p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark font-medium text-cream">
                5
              </span>
              <h3 className="font-serif text-lg font-semibold text-dark">
                Add &ldquo;Set Wallpaper Photo&rdquo; Action
              </h3>
            </div>
            <div className="mt-4 space-y-3 text-dark/80">
              <p>
                Use the search bar at the bottom of the screen to search for{" "}
                <strong>&ldquo;Set Wallpaper Photo&rdquo;</strong> and tap it to add.
              </p>
              <p>
                Make sure the input is set to <strong>Contents of URL</strong>{" "}
                (it should connect automatically).
              </p>
              <p>
                Tap <strong>Lock Screen</strong> to select where the wallpaper
                appears.
              </p>
            </div>
          </section>

          {/* Step 6 - Critical */}
          <section className="rounded-xl border-2 border-menstrual bg-paper p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-menstrual font-medium text-cream">
                6
              </span>
              <h3 className="font-serif text-lg font-semibold text-dark">
                Critical: Disable Crop Options
              </h3>
            </div>
            <div className="mt-4 space-y-3 text-dark/80">
              <p className="font-medium text-menstrual">
                This step is essential! Without it, iOS will crop incorrectly
                or prompt you daily.
              </p>
              <p>
                In the <strong>Set Wallpaper Photo</strong> action, tap the{" "}
                <strong>&gt;</strong> arrow to expand options.
              </p>
              <p>
                Turn <strong>OFF</strong> &ldquo;Show Preview&rdquo;.
              </p>
              <p>
                Turn <strong>OFF</strong> &ldquo;Crop to Subject&rdquo; (if
                available).
              </p>
            </div>
          </section>

          {/* Step 7 */}
          <section className="rounded-xl bg-paper p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark font-medium text-cream">
                7
              </span>
              <h3 className="font-serif text-lg font-semibold text-dark">
                Save and Test
              </h3>
            </div>
            <div className="mt-4 space-y-3 text-dark/80">
              <p>
                Tap <strong>Done</strong> in the top right corner.
              </p>
              <p>
                To test immediately: Go back to Automations, tap your new
                automation, and tap the <strong>Play</strong> button.
              </p>
              <p>
                Your lock screen should update within a few seconds!
              </p>
            </div>
          </section>
        </div>

        {/* Troubleshooting */}
        <section className="mt-12 rounded-xl bg-paper p-6">
          <h2 className="font-serif text-xl font-semibold text-dark">
            Troubleshooting
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-medium text-dark">
                Wallpaper looks cropped or zoomed in?
              </p>
              <p className="mt-1 text-sm text-dark/70">
                Make sure &ldquo;Show Preview&rdquo; and &ldquo;Crop to
                Subject&rdquo; are both disabled in the Set Wallpaper Photo action.
              </p>
            </div>
            <div>
              <p className="font-medium text-dark">
                Automation not running automatically?
              </p>
              <p className="mt-1 text-sm text-dark/70">
                Check that &ldquo;Run Immediately&rdquo; is selected and that
                notifications for Shortcuts are enabled.
              </p>
            </div>
            <div>
              <p className="font-medium text-dark">
                Getting an error when fetching the URL?
              </p>
              <p className="mt-1 text-sm text-dark/70">
                Double-check that your URL is correct and includes both the
                start date and model parameters.
              </p>
            </div>
          </div>
        </section>

        {/* Back to home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block rounded-lg bg-dark px-6 py-3 font-medium text-cream transition-colors hover:bg-dark/80"
          >
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark/10 px-6 py-8">
        <p className="text-center text-sm text-dark/50">
          &copy; {new Date().getFullYear()} The Cycle Calendar
        </p>
      </footer>
    </div>
  );
}
