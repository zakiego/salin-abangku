import { corsHeaders } from "@/app/api/cors";
import { NextResponse } from "next/server";

export const dynamic = "force-static"; // defaults to auto

export async function GET(request: Request) {
	return NextResponse.json(
		{
			one: "/api/one",
			all: "/api/all",
		},
		{
			headers: corsHeaders,
		},
	);
}
