import { homePage } from "@/services/home";
import { formatAreaPixResponse, formatLocationResponse } from "@/util/home";

export function useAreaPix() {
  const { getAreaPix } = homePage;

  async function getAreaPixHome() {
    const response = await getAreaPix();
    const data = response.data;

    const formattedResponse = formatAreaPixResponse(data);
    return formattedResponse;
  }

  return { getAreaPixHome };
}
