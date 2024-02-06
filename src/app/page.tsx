import PageClient from "@/app/page-client";
import { shuffle } from "@/lib/sort";
import { templates, templatesEn } from "@/lib/template";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <PageClient
      templatesID={shuffle(templates)}
      templatesEN={shuffle(templatesEn)}
    />
  );
}
