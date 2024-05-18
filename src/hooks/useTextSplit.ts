import { UseTextSplitReturnProps } from "@/types/home";

function splitParagraph(text: string): string[] {
  return text.split('\n')?.filter(item => !!item)
}

function splitBold(text: string): string[] {
  const textSplitted = text.split('**')
  return textSplitted

}

function splitLink(text: string): string[] {
  const regex = /\[([^\]]+)]\(link\)/g;
  const elements = [];

  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {

    if (match.index > lastIndex) {
      const tSlice = text.slice(lastIndex, match.index)
      elements.push(`${tSlice}<a href="${match[1]}" target="_blank" style="text-decoration: underline;word-break: break-all; white-space: normal;">${match[1]}</a>`)
    }


    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    const sliceText = text.slice(lastIndex)
    elements.push(sliceText)
  }

  return elements;

}

export const useTextSplit = (
  data: string
): UseTextSplitReturnProps[] | null => {
  try {
    let text = data;
    const regex = /!\[([^\]]+)]\((?!link\)\s*)([^)]+)\)/g;
    const elements = [];
    let lastIndex = 0;

    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const formattedString: string[] = [];

        const textSplited = splitParagraph(text.slice(lastIndex, match.index))
        textSplited.forEach(item => {
          const bold = splitBold(item)

          const boldFiltered = bold.map((itemBold, index) => {
            if (index % 2 !== 0) {
              return `<strong>${itemBold}</strong>`
            }
            return itemBold
          })?.filter( itemBold => !!itemBold)

          boldFiltered.forEach(itemB => {
            const linkSplitted = splitLink(itemB)

            formattedString.push(...linkSplitted)
          })

        })

        elements.push(...formattedString?.map(item => ({ type: "text", value: item })));
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
      const formattedString: string[] = [];

      const textSplited = splitParagraph(text.slice(lastIndex))
      textSplited.forEach(item => {
        const bold = splitBold(item)

        const boldFiltered = bold.map((itemBold, index) => {
          if (index % 2 !== 0) {
            return `<strong>${itemBold}</strong>`
          }
          return itemBold
        })
        boldFiltered.forEach(itemB => {
          const linkSplitted = splitLink(itemB)

          formattedString.push(...linkSplitted)
        })

      })

      elements.push(...formattedString?.map(item => ({ type: "text", value: item })));
    }

    return elements;
  } catch (error) {
    return null;
  }
};
