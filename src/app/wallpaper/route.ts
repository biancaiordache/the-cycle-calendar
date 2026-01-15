import { NextRequest, NextResponse } from "next/server";
import { calculateCycleDay, iphoneModels, type IphoneModel } from "@/lib/cycle-data";

const validModels = iphoneModels.map((m) => m.id);

// Map models to wallpaper folders
const modelToFolder: Record<IphoneModel, string> = {
  "16-pro-max": "16-pro-max",
  "16-plus": "16-plus",
  "16-pro": "16-pro",
  "15": "15",
  "14-plus": "14-plus",
  "14": "14",
  "13-mini": "13-mini",
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const startParam = searchParams.get("start");
  const modelParam = searchParams.get("model");

  // Validate start date
  if (!startParam) {
    return NextResponse.json(
      { error: "Missing required parameter: start (YYYY-MM-DD)" },
      { status: 400 }
    );
  }

  const startDate = new Date(startParam);
  if (isNaN(startDate.getTime())) {
    return NextResponse.json(
      { error: "Invalid date format. Use YYYY-MM-DD" },
      { status: 400 }
    );
  }

  // Validate model
  const model = (modelParam || "15") as IphoneModel;
  if (!validModels.includes(model)) {
    return NextResponse.json(
      { error: `Invalid model. Valid options: ${validModels.join(", ")}` },
      { status: 400 }
    );
  }

  // Calculate current cycle day
  const today = new Date();
  const cycleDay = calculateCycleDay(startDate, today);

  // Get the wallpaper folder for this model
  const folder = modelToFolder[model];

  // Construct the image URL
  const imageUrl = `/wallpapers/${folder}/${cycleDay}.png`;

  // Redirect to the wallpaper image
  return NextResponse.redirect(new URL(imageUrl, request.url), {
    status: 302,
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}
