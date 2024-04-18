import { homePage } from "@/services/home";
import { formatGitfListResponse, formatGitfResponse } from "@/util/home";

export function useGiftList() {
  const { getGiftList, getGift, updateGift } = homePage;

  async function getGiftListHome() {
    const response = await getGiftList();
    const data = response.data;

    const formattedResponse = formatGitfListResponse(data);
    return formattedResponse;
  }

  async function getGiftItem(id: number) {
    const response = await getGift(id);
    const data = response.data;

    const formattedResponse = formatGitfResponse(data.data);
    return formattedResponse;
  }

  async function setGiftGuest(id: number, guest: string) {
    await updateGift(id, guest);
    return true;
  }

  return { getGiftList: getGiftListHome, getGiftItem, setGiftGuest };
}
