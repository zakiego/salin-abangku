import PageClient from "@/app/page-client";
import { templates, templatesEn } from "@/lib/template";

export const dynamic = "force-dynamic";

export default function Home() {
	return <PageClient templatesID={templates} templatesEN={templatesEn} />;
}
