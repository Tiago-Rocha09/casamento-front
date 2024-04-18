import { homePage } from "@/services/home";
import { formatAboutResponse } from "@/util/home";

export function useAboutInfo() {
  const { getAbout } = homePage;
  async function getAboutHome() {
    const response = await getAbout();
    const data = response.data;

    const formattedResponse = formatAboutResponse(data);

    return formattedResponse;
  }

  return { getAboutHome };
}
