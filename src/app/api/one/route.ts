import { templates, templatesEn } from "@/lib/template";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
	const lang = request.nextUrl.searchParams.get("lang");

	if (lang === "en") {
		const random = Math.floor(Math.random() * templatesEn.length);
		const template = templatesEn[random];

		return NextResponse.json(template);
	}

	const random = Math.floor(Math.random() * templates.length);
	const template = templates[random];

	return NextResponse.json(template);
}
