import { useState, useRef, useEffect } from 'react'
import { createUnparsedSourceFile } from 'typescript'

export let useCheckMenuItem = (options: any, menuItemOpen: boolean) => {
    const scrollRef = useRef<any>(null)
    const [isVisible, setIsVisible] = useState(true)

    const callBackFunction = (entries: any) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        if (scrollRef.current) {
            setTimeout(() => {

                let observerRerValue: HTMLInputElement | null = null
                const observer = new IntersectionObserver(callBackFunction, options)

                observer.observe(scrollRef.current)
                observerRerValue = scrollRef.current

                console.log("isVisble: " + isVisible)
                if (observerRerValue && !isVisible) {
                    observer.unobserve(observerRerValue)
                }

            }, 300)
        }

    }, [scrollRef, options])

    return [scrollRef, isVisible]
}