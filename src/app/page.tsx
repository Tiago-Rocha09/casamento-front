import { CounterComponent } from "@/components/counter";
import {
  AboutSection,
  ConfirmPresenceSection,
  CountdownSection,
  GiftsListSection,
  MainSection,
} from "@/components/home/sections";
import { ExtraInfoSection } from "@/components/home/sections/ExtraInfo";
import { HeaderConfirmPresence } from "@/components/home/sections/confirmPresence/components/header";
import { LocationSection } from "@/components/home/sections/location";
import { useBanner } from "@/components/home/sections/main/hooks";

export default async function Home() {
  const { getMainInfoHome } = useBanner();

  const mainInfoData = await getMainInfoHome();

  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <MainSection mainInfoData={mainInfoData} />
      <CountdownSection>
        <CounterComponent targetDate={mainInfoData?.date || ''} />
      </CountdownSection>
      <AboutSection />
      <GiftsListSection />
      <ConfirmPresenceSection>
        <HeaderConfirmPresence />
      </ConfirmPresenceSection>
      <LocationSection />
      <ExtraInfoSection />
    </main>
  );
}
