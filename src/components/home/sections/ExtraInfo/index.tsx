import { RichTextDisplay } from "@/components/RichTextDisplay";
import { useExtraInfo } from "./hooks";
import { ExtraInfoItem } from "./compoents/extraInfoItem";

export const ExtraInfoSection = async () => {
  const { getExtraInfoHome } = useExtraInfo();

  const extraInfo = await getExtraInfoHome();

  return (
    <section
      className="odd:bg-gray-500 even:bg-white odd:text-white even:text-black py-20 px-4 md:px-0"
      id="extra-info-section"
    >
      <section className="container mx-auto flex flex-col gap-4">
        {" "}
        {extraInfo?.map((item) => (
          <ExtraInfoItem key={item.id} {...item} />
        ))}
      </section>
    </section>
  );
};
