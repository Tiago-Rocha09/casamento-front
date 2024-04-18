import { MainInformationContext } from "@/context/mainInformation"
import { useContext } from "react"

export const useMainInformation = () => {
    const mainInformationContext = useContext(MainInformationContext)

    return mainInformationContext
}