import fs from "fs";
import path from "path";
import { getPlaiceholder } from "plaiceholder";

export async function getBlurDataURL(imagePath: string): Promise<string> {
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  const fullPath = path.join(process.cwd(), "public", cleanPath);

  if (!fs.existsSync(fullPath)) {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg==";
  }

  const buffer = fs.readFileSync(fullPath);
  const { base64 } = await getPlaiceholder(Buffer.from(buffer), { size: 10 });
  return base64;
}
