import { homePage } from "@/services/home";
import { formatLocationResponse } from "@/util/home";

export function useLocation() {
  const { getLocation } = homePage;

  async function getLocationHome() {
    const response = await getLocation();
    const data = response.data;

    const formattedResponse = formatLocationResponse(data);
    return formattedResponse;
  }

  return { getLocationHome };
}
