import { corsHeaders } from "@/app/api/cors";
import { templates, templatesEn } from "@/lib/template";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang");

  if (lang === "en") {
    return NextResponse.json(templatesEn);
  }

  return NextResponse.json(templates, {
    headers: corsHeaders,
  });
}
