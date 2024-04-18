import { homePage } from "@/services/home";
import { formatBannerResponse, formatConfirmPresenceResponse, formatMainInfoResponse } from "@/util/home";

export function useBanner() {
  const { getBanner, getMainInfo } = homePage;

  async function getBannerHome() {
    const response = await getBanner();
    const data = response.data;

    const formattedResponse = formatBannerResponse(data);
    return formattedResponse;
  }

  async function getMainInfoHome() {
    const response = await getMainInfo();
    const data = response.data;

    const formattedResponse = formatMainInfoResponse(data);
    return formattedResponse;
  }

  return { getBannerHome, getMainInfoHome };
}
