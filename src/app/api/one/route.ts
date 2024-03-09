import { corsHeaders } from "@/app/api/cors";
import { templates as templatesId, templatesEn } from "@/lib/template";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang");

  const templates = lang === "en" ? templatesEn : templatesId;
  const random = Math.floor(Math.random() * templates.length);
  const template = templates[random];

  return NextResponse.json(template, {
    headers: corsHeaders,
  });
}
