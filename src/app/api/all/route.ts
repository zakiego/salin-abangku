import { templates } from "@/lib/template";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(request: Request) {
	return NextResponse.json(templates);
}
