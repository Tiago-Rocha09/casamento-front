import { homePage } from "@/services/home";
import { MessageItemProps } from "@/types/home";
import { formatConfirmationsResponse, formatConfirmPresenceResponse } from "@/util/home";

export function useConfirmPresence() {
  const { getConfirmPresence, createConfirmPresence, getConfirmations } =
    homePage;

  async function getConfirmPresenceHome() {
    const response = await getConfirmPresence();
    const data = response.data;

    const formattedResponse = formatConfirmPresenceResponse(data);
    return formattedResponse;
  }

  async function setConfirmPresence(
    name: string,
    confirm: "Sim" | "Não",
    message: string,
    qtdPerson: number
  ) {
    await createConfirmPresence(name, confirm, message, qtdPerson);
    return true;
  }

  async function getMessages(): Promise<MessageItemProps[]> {
    try {
      const response = await getConfirmations();
      return formatConfirmationsResponse(response.data)
    } catch (error) {
      console.log({ error });
      return [];
    }
  }

  return {
    getConfirmPresenceHome,
    createConfirmPresence: setConfirmPresence,
    getMessages,
  };
}
