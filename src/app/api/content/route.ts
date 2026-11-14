import { content } from "@/content";

export const dynamic = "force-static";

export function GET() {
  return Response.json({ layout: content.layout, page: content.page });
}
