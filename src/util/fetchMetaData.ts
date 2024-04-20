import { homePage } from "@/services/home";
import { formatMetaDataResponse } from "@/util/home";

export function fetchMetaData() {
  const { getMetaData } = homePage;

  async function getMetaDataHome() {
    const response = await getMetaData();
    const data = response.data;
    
    const formattedResponse = formatMetaDataResponse(data);
    return formattedResponse;
  }

  return { getMetaDataHome };
}
