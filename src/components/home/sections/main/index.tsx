import Image from "next/image";
import { useBanner } from "./hooks";
import { MainInfoProps } from "@/types/home";

type MainSectionProps = {
  mainInfoData: MainInfoProps | null;
};

export const MainSection = async ({ mainInfoData }: MainSectionProps) => {
  const { getBannerHome } = useBanner();

  const bannerData = await getBannerHome();

  const imageData = bannerData?.image;
  return (
    <section className="odd:bg-gray-500 relative block" id="main-section">
      <Image
        src={imageData?.url || ""}
        width={imageData?.width} //2400
        height={imageData?.height} //800
        alt={imageData?.alt || "Imagem noivos"}
        className="w-full h-auto brightness-50"
      />
      <hgroup className="absolute inset-0 flex items-center justify-end flex-col mb-2 md:mb-10">
        {mainInfoData?.names && (
          <h1 className="text-3xl md:text-5xl text-white font-bold">
            {mainInfoData.names}
          </h1>
        )}
        {mainInfoData?.date && (
          <p className="mt-3 md:mt-6">
            <time
              className="text-2xl md:text-4xl text-white"
              dateTime={mainInfoData?.date}
            >
              {mainInfoData?.formattedDate}
            </time>
          </p>
        )}
      </hgroup>
    </section>
  );
};
