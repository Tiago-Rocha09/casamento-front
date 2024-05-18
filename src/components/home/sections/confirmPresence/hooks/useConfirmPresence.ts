import { homePage } from "@/services/home";
import { formatConfirmPresenceResponse } from "@/util/home";

export function useConfirmPresence() {
  const { getConfirmPresence, createConfirmPresence } = homePage;

  async function getConfirmPresenceHome() {
    const response = await getConfirmPresence();
    const data = response.data;

    const formattedResponse = formatConfirmPresenceResponse(data);
    return formattedResponse;
  }

  async function setConfirmPresence(name: string, confirm: "Sim" | "Não", message: string, qtdPerson: number) {
    await createConfirmPresence(name, confirm, message, qtdPerson);
    return true;
  }

  return { getConfirmPresenceHome, createConfirmPresence: setConfirmPresence };
}
