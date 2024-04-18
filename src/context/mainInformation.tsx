import { MainInformationProps } from "@/types/mainInformation";
import { createContext, useState } from "react";

export const MainInformationContext = createContext<MainInformationProps>(
  {} as MainInformationProps
);

export function MainInformationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [coupleName, setCoupleName] = useState<string | null>(null);
  const [eventDate, setEventDate] = useState<string | null>(null);

  function updateCoupleName(name: string) {
    setCoupleName(name);
  }

  function updateEventDate(name: string) {
    setEventDate(name);
  }

  return (
    <MainInformationContext.Provider
      value={{ coupleName, eventDate, updateCoupleName, updateEventDate }}
    >
      {children}
    </MainInformationContext.Provider>
  );
}
