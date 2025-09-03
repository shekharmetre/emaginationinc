// lib/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API || "",
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_SECRET || "",
  secure: true, // always use https
});

export default cloudinary;
