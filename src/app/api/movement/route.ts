import cloudinary from "@/config/cloudinary";
import { getUniquePageItems } from "@/lib/helper";
import { type NextRequest, NextResponse } from "next/server";

interface CloudinaryResource {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: 'image' | 'video';
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  url: string;
  secure_url: string;
}

interface GalleryImage {
  asset_id: string;
  display_name: string;
  filename: string;
  format: string;
  secure_url: string;
}

function mapCloudinaryResources(resources: CloudinaryResource[]): GalleryImage[] {
  return resources.map(item => ({
    asset_id: item.asset_id,
    display_name: item.public_id || "Unnamed",
    filename: item.public_id?.split('/').pop() || "No Filename",
    format: item.format,
    secure_url: item.secure_url,
  }));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const page = Number(body.page || 1); // default = 1
    const limit = Number(body.limit || 10); // default = 10
    const category = body.category || "wedding";
    const folder = body.folder || "emaginations-images/all";

    // Fetch images from Cloudinary
    const { resources } = await cloudinary.search
      .expression(`folder:${folder}`)
      .max_results(80)
      .execute();

    // Transform image data to required shape
    const readyData = mapCloudinaryResources(resources);

    // Paginate/Select page from transformed data
    const response = getUniquePageItems(readyData, page, [], limit);

    // Return images for this page
    return NextResponse.json({ resources: response });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Cloudinary fetch error:", err.message);
    }
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
