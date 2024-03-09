import { corsHeaders } from "@/app/api/cors";
import { templates as templatesId, templatesEn } from "@/lib/template";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang");
  const templates = lang === "en" ? templatesEn : templatesId;

  return NextResponse.json(templates, {
    headers: corsHeaders,
  });
}
