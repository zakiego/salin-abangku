import PageClient from "@/app/page-client";
import { templates, templatesEn } from "@/lib/template";

export const dynamic = "force-dynamic";

export default function Home() {
  return <PageClient templatesID={templates} templatesEN={templatesEn} />;
}

export const shuffle = (array: string[]) => {
  let currentIndex = array.length;
  let randomIndex: number;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
