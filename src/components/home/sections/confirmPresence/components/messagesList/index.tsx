"use client"
import { useEffect, useState } from "react"
import { useConfirmPresence } from "../../hooks"
import { MessageItem } from "../messageItem"
import { MessageItemProps } from "@/types/home"

const PAGE_SIZE = 5

export const MessageList = ({ shouldRefresh }: { shouldRefresh: boolean }) => {
    const [pageNumber, setPageNumber] = useState(0)
    const [messages, setMessages] = useState<MessageItemProps[]>([])

    const { getMessages } = useConfirmPresence()

    const getMessagesHome = async () => {
        try {
            const result = await getMessages()
            setMessages(result)
        } catch (error) {
            console.log({ error });

        }
    }

    const paginateMessages = () => {
        return messages.slice(0, PAGE_SIZE * (pageNumber + 1))
    }

    useEffect(() => {
        getMessagesHome()
    }, [shouldRefresh])

    useEffect(() => {
        if (messages?.length) {
            paginateMessages()
        }
    }, [pageNumber, messages])

    return <div className="flex flex-col gap-6 mt-6">
        {
            paginateMessages().map(item => <MessageItem key={item.guest} {...item} />)
        }
        {paginateMessages().length < messages.length && (
            <button
                type="button"
                onClick={() => setPageNumber(prev => prev + 1)}
                className="text-white bg-red-700 rounded px-4 py-2 cursor-pointer hover:bg-red-600 flex gap-2 items-center w-fit min-w-36 justify-center m-auto"
            >
                Ver mais mensagens
            </button>
        )}
    </div>
}