import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Clean filename
    const originalName = file.name || 'image.png';
    const filename = `${Date.now()}_${originalName.replace(/\s+/g, '_')}`;
    
    // Ensure the public/cars directory exists
    const uploadDir = path.join(process.cwd(), "public", "cars");
    await fs.mkdir(uploadDir, { recursive: true });
    
    // Write file to local public directory
    const filePath = path.join(uploadDir, filename);
    await fs.writeFile(filePath, buffer);
    
    // Return the local URL which will be served by Next.js
    const imageUrl = `/cars/${filename}`;

    return NextResponse.json({ imageUrl });
  } catch (error: any) {
    console.error("API Upload Error:", error);
    return NextResponse.json({ error: error.message || "Failed to upload image locally" }, { status: 500 });
  }
}
