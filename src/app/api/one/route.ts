import { templates } from "@/lib/template";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
	const random = Math.floor(Math.random() * templates.length);
	const template = templates[random];

	return NextResponse.json(template);
}
