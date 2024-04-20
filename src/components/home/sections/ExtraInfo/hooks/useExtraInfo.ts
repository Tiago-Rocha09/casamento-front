import { homePage } from "@/services/home";
import { formatExtraInfoResponse } from "@/util/home";

export function useExtraInfo() {
  const { getExtraInfo } = homePage;

  async function getExtraInfoHome() {
    const response = await getExtraInfo();
    const data = response.data;

    const formattedResponse = formatExtraInfoResponse(data);

    return formattedResponse;
  }

  return { getExtraInfoHome };
}
