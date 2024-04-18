import { RichTextDisplay } from "@/components/RichTextDisplay";
import { useConfirmPresence } from "../../hooks";

export const HeaderConfirmPresence = async () => {
  const { getConfirmPresenceHome } = useConfirmPresence();

  const confirmPresenceData = await getConfirmPresenceHome();
  return (
    <>
      {confirmPresenceData?.title && (
        <h2
          dangerouslySetInnerHTML={{
            __html: confirmPresenceData.title || "Confirme sua presença",
          }}
          className="text-2xl md:text-3xl text-white font-bold"
        />
      )}
      {confirmPresenceData?.text && (
        <RichTextDisplay data={confirmPresenceData.text} />
      )}
    </>
  );
};
