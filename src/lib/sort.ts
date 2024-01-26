import { templates } from "@/lib/template";

// sort array of string by length and alphabet, start from shortest
export const sort = (array: string[]): string[] => {
  return array.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });
};

const result = sort(templates);

console.log(result);
