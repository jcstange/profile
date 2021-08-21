import { useState, useEffect } from "react";

export type WindowDimension = {
    width: number,
    height: number
}

function getWindowDimensions() : WindowDimension {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
}

function isMobileWidth(windowDimensions: WindowDimension) : boolean {
    const { width } = windowDimensions
    return width < 768
}

export default function useIsMobile() {
    const [ isMobile, setIsMobile ] = useState<boolean>(isMobileWidth(getWindowDimensions()))
    
    useEffect(() => {
        function handleResize(){
            const _windowDimensions = getWindowDimensions()
            const _isMobile = isMobileWidth(_windowDimensions)
            setIsMobile(_isMobile)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isMobile
}