import { templates } from "@/lib/template";
import { NextResponse } from "next/server";

export const dynamic = "force-static"; // defaults to auto

export async function GET(request: Request) {
	return NextResponse.json({
		one: {
			id: "https://salin-abangku.vercel.app/api/one",
			en: "https://salin-abangku.vercel.app/api/one?lang=en",
		},
		all: {
			id: "https://salin-abangku.vercel.app/api/all",
			en: "https://salin-abangku.vercel.app/api/all?lang=en",
		},
	});
}
