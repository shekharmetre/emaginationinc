// app/api/images/route.ts
import cloudinary from "@/config/cloudinary";
import { NextResponse } from "next/server";
import { getUniquePageItems } from "@/lib/helper";

// keep track of indexes & category across requests
let usedIndexes: number[] = [];
let lastCategory = "";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const page = Number(body.page || 1); // default = 1
    const limit = Number(body.limit || 10); // default = 10
    const category = body.category || "wedding";
    const folder = body.folder || "emaginations-images/all";

    // Reset usedIndexes when category changes
    if (category !== lastCategory) {
      usedIndexes = [];
      lastCategory = category;
    }

    // Fetch images (Cloudinary max 1000 per search)
    const { resources } = await cloudinary.search
      .expression(`folder:${folder}`)
      .max_results(80) // pull more so we can randomize across pages
      .execute();

    const response = getUniquePageItems(resources, page, usedIndexes, limit);

    if (!response || response.length === 0) {
      return NextResponse.json({ resources: [] });
    }

    const formatted = response.map((img: any) => ({
      id: img?.asset_id,
      name: img.display_name || img.filename,
      filename: img.filename,
      format: img.format,
      url: img.secure_url,
    }));

    return NextResponse.json({ resources: formatted });
  } catch (err: any) {
    console.error("Cloudinary fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
