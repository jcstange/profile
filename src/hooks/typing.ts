import { useEffect, useState } from "react"

export default function useTypingEffect(text: string, ms: number) {
    const [ typingText, setTypingText ] = useState<string>("_")
    useEffect(()=>{
        function applyTypingEffect() {
            for(let i = 0; i<=text.length; i++) {
                sleep(ms * i).then(() => {
                    setTypingText(text.substring(0,i) + "_")
             })
            }
        }
        if (typingText === "_") applyTypingEffect()
    }, [ms, text, typingText])
    return typingText
}

function sleep(ms: number) {
    return new Promise<()=>undefined>((i) => setTimeout(i, ms))
}