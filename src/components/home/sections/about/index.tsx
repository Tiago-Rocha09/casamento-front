import { RichTextDisplay } from "@/components/RichTextDisplay";
import { useAboutInfo } from "./hooks";

export const AboutSection = async () => {
  
  const { getAboutHome } = useAboutInfo()
  
  const aboutData = await getAboutHome()

  return (
    <section className="odd:bg-gray-500 even:bg-white odd:text-white even:text-black py-20 px-4 md:px-0" id="about-section">
      <section className="container mx-auto flex flex-col gap-6">
        {aboutData?.title && (
          <h2
            dangerouslySetInnerHTML={{ __html: aboutData.title }}
            className="text-2xl md:text-3xl text-white font-bold"
          />
        )}
        {aboutData?.text && <RichTextDisplay data={aboutData.text} />}
      </section>
    </section>
  );
};
