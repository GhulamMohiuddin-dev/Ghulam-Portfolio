import { NextResponse, type NextRequest } from "next/server";
import { projects } from "@/data/projects";

const slugs = new Set(projects.map((project) => project.slug));

// Unknown case-study slugs would otherwise stream the 404 UI with a 200 status.
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  if (slug && !slugs.has(slug)) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }
}

export const config = {
  matcher: "/work/:slug",
};
