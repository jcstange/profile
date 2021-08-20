import { useState, useEffect } from "react";

export type WindowDimension = {
    width: number,
    height: number
}

function getWindowDimensions() : WindowDimension {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimension>(getWindowDimensions())
    
    useEffect(() => {
        function handleResize(){
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}