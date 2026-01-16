"use client";

import { useState } from "react";
import { iphoneModels, type IphoneModel } from "@/lib/cycle-data";

export function UrlGenerator() {
  const [startDate, setStartDate] = useState("");
  const [model, setModel] = useState<IphoneModel>("15");
  const [copied, setCopied] = useState(false);

  const generatedUrl =
    startDate && model
      ? `${typeof window !== "undefined" ? window.location.origin : ""}/wallpaper?start=${startDate}&model=${model}`
      : "";

  const handleCopy = async () => {
    if (generatedUrl) {
      await navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const inputStyles = "w-full rounded-lg border border-dark/20 bg-paper py-2.5 pl-4 pr-4 text-dark focus:border-dark focus:outline-none focus:ring-1 focus:ring-dark";

  return (
    <div className="w-full space-y-4 lg:max-w-md">
      <div className="space-y-2">
        <label
          htmlFor="start-date"
          className="block text-sm font-medium text-dark"
        >
          When did your last period start?
        </label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className={inputStyles}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="iphone-model"
          className="block text-sm font-medium text-dark"
        >
          iPhone model
        </label>
        <select
          id="iphone-model"
          value={model}
          onChange={(e) => setModel(e.target.value as IphoneModel)}
          className={inputStyles}
        >
          {iphoneModels.map((m) => (
            <option key={m.id} value={m.id}>
              {m.label}
            </option>
          ))}
        </select>
      </div>

      {generatedUrl && (
        <>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-dark">
              Your personal URL
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={generatedUrl}
                className="flex-1 truncate rounded-lg border border-dark/20 bg-cream px-3 py-2.5 text-sm text-dark"
              />
              <button
                onClick={handleCopy}
                className="shrink-0 rounded-lg bg-dark px-4 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-dark/80"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <a
            href="/setup"
            className="block w-full rounded-lg border-2 border-dark bg-transparent px-5 py-2.5 text-center font-medium text-dark transition-colors hover:bg-dark hover:text-cream"
          >
            Next: Set up iOS Shortcut
          </a>
        </>
      )}

      {/* Disclaimer */}
      <p className="text-center text-xs text-dark/40 lg:text-left">
        This is an awareness tool, not a medical tracker. It does not predict
        fertility, diagnose conditions, or replace professional medical advice.
      </p>
    </div>
  );
}
