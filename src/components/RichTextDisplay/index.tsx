import { useTextSplit } from "@/hooks/useTextSplit";
import { TextSplitImageProps, UseTextSplitReturnProps } from "@/types/home";
import Image from "next/image";
import { ReactNode } from "react";

enum Status {
  TEXT = "text",
  IMG = "img",
}

const getElementValue = ({ type, value }: UseTextSplitReturnProps) => {
  switch (type) {
    case Status.TEXT:
      return (
        <p
          className="[&>iframe]:w-full"
          dangerouslySetInnerHTML={{ __html: value }}
          key={value.toString()}
        />
      );
    case Status.IMG:
      return (
        <Image
          src={(value as TextSplitImageProps).url}
          width={1024}
          height={1024}
          alt={(value as TextSplitImageProps).alt || "Imagem noivos"}
          className="h-auto m-auto rounded-2xl mt-3 w-full md:w-auto"
        />
      );
    default:
      return null;
  }
};

export const RichTextDisplay = ({ data }: { data: string }): ReactNode => {
  const elements = useTextSplit(data);

  if (!elements) {
    return null;
  }

  return elements.map((item) => getElementValue(item));
};
