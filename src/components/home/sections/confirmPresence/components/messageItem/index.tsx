import { RichTextDisplay } from "@/components/RichTextDisplay"
import { MessageItemProps } from "@/types/home"

export const MessageItem = ({ guest, message }: MessageItemProps) => {
    return <div className="text-black border-l-8 pl-2 min-h-14 flex flex-col justify-center odd:border-l-gray-200 even:border-l-gray-400">
        <p className="font-bold text-gray-500">{guest}</p>
        <div className="[&>p]:text-gray-400">
        <RichTextDisplay data={message} />
        </div>
    </div>
}