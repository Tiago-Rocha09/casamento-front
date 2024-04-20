import { RichTextDisplay } from "@/components/RichTextDisplay";
import { ExtraInfoProps } from "@/types/home";

export const ExtraInfoItem = (props: ExtraInfoProps) => {
  return (
    <div className="flex flex-col gap-6 mb-10">
      {props?.title && (
        <h2
          dangerouslySetInnerHTML={{
            __html: props.title || "Confirme sua presença",
          }}
          className="text-2xl md:text-3xl text-white font-bold"
        />
      )}
      {props?.subTitle && (
        <p
          dangerouslySetInnerHTML={{
            __html: props.subTitle || "Local da cerimônia",
          }}
          className="text-white font-bold"
        />
      )}
      {props?.content?.length && (
        <RichTextDisplay data={props?.content} />
      )}
    </div>
  );
};
