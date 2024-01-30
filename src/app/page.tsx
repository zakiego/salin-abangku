import PageClient from "@/app/page-client";
import { shuffle } from "@/lib/utils";
import { templatesEn, templatesWithSubject } from "@/lib/template";

export const dynamic = "force-dynamic";

export default function Home() {
	return (
		<PageClient
			templatesID={shuffle(templatesWithSubject)}
			templatesEN={shuffle(templatesEn)}
		/>
	);
}
