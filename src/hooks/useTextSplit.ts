import { UseTextSplitReturnProps } from "@/types/home";

function splitParagraph(text: string): string[] {
  return text.split('\n')?.filter(item => !!item)

}

export const useTextSplit = (
  data: string
): UseTextSplitReturnProps[] | null => {
  try {
    let text = data;
    const regex = /!\[([^\]]+)]\(([^)]+)\)/g;
    const elements = [];
    let lastIndex = 0;

    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const textSplited = splitParagraph(text.slice(lastIndex, match.index))
        elements.push(...textSplited?.map(item => ({ type: "text", value: item })));
        // elements.push({
        //   type: "text",
        //   value: text.slice(lastIndex, match.index),
        // });
      }

      elements.push({
        type: "img",
        value: {
          alt: match[1],
          url: match[2],
        },
      });

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      const textSplited = splitParagraph(text.slice(lastIndex))
      elements.push(...textSplited?.map(item => ({ type: "text", value: item })));
    }

    return elements;
  } catch (error) {
    return null;
  }
};
