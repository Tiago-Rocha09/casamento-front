import { RichTextDisplay } from "@/components/RichTextDisplay";
import { useAreaPix } from "./hooks";

export const AreaPixSection = async () => {
  const { getAreaPixHome } = useAreaPix();

  const locationInfo = await getAreaPixHome();

  return (
    <section
      className="odd:bg-gray-500 even:bg-white odd:text-white even:text-black py-10 px-4 md:px-0"
      id="lua-de-mel"
    >
      <section className="container mx-auto flex flex-col gap-6">
        <hgroup className="flex flex-col gap-2">
          {locationInfo?.title && (
            <h2
              dangerouslySetInnerHTML={{
                __html: locationInfo.title || "Confirme sua presença",
              }}
              className="text-2xl md:text-3xl text-white font-bold"
            />
          )}
          {locationInfo?.subtitle && (
            <h4
              dangerouslySetInnerHTML={{
                __html: locationInfo.subtitle || "Local da cerimônia",
              }}
              className="text-xl md:text-2xl text-white font-bold"
            />
          )}
        </hgroup>
        <div>
          {locationInfo?.text && (
            <RichTextDisplay data={locationInfo?.text} />
          )}
        </div>

      </section>
    </section>
  );
};
