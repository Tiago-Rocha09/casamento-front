export type MainInformationProps = {
    coupleName: string | null
    eventDate: string | null
    updateCoupleName: (name: string) => void
    updateEventDate: (date: string) => void
}