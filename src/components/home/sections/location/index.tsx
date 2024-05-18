import { RichTextDisplay } from "@/components/RichTextDisplay";
import { useLocation } from "./hooks";

export const LocationSection = async () => {
  const { getLocationHome } = useLocation();

  const locationInfo = await getLocationHome();

  return (
    <section
      className="odd:bg-gray-500 even:bg-white odd:text-white even:text-black py-10 px-4 md:px-0"
      id="local-section"
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
          {locationInfo?.subtitleCeremony && (
            <h4
              dangerouslySetInnerHTML={{
                __html: locationInfo.subtitleCeremony || "Local da cerimônia",
              }}
              className="text-xl md:text-2xl text-white font-bold"
            />
          )}
        </hgroup>
        <div>
          {locationInfo?.textCeremony && (
            <RichTextDisplay data={locationInfo?.textCeremony} />
          )}
        </div>

        <div className="overflow-hidden pb-[56.25%] relative h-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5734.13827243492!2d-49.09516133231535!3d-5.335025221347583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c3a11ec0293ae5%3A0x829044314c7d04e3!2sPar%C3%B3quia%20Nossa%20Senhora%20de%20Nazar%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1713327803248!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="left-0 top-0 h-full w-full absolute"
          ></iframe>
        </div>

        <hgroup className="pt-3 flex flex-col gap-2">
          {locationInfo?.subtitleParty && (
            <h4
              dangerouslySetInnerHTML={{
                __html: locationInfo.subtitleParty || "Local da recepção",
              }}
              className="text-xl md:text-2xl text-white font-bold"
            />
          )}
        </hgroup>
        <div>
          {locationInfo?.textParty && (
            <RichTextDisplay data={locationInfo?.textParty} />
          )}
        </div>

        <div className="overflow-hidden pb-[56.25%] relative h-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1034.6124076941776!2d-49.09326483849684!3d-5.3363864253003195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c3a11ec1f10861%3A0x657894806fed3901!2sOlympia%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1713399650217!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="left-0 top-0 h-full w-full absolute"
          ></iframe>
        </div>
      </section>
    </section>
  );
};
