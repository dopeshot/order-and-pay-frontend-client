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
            console.log("Weird" + scrollRef.current)

            let observerRerValue: HTMLInputElement | null = null
            const observer = new IntersectionObserver(callBackFunction, options)
            console.log(menuItemOpen)
            if (menuItemOpen) {
                console.log(menuItemOpen)
                console.log("1" + scrollRef.current)
                observer.observe(scrollRef.current)
                observerRerValue = scrollRef.current
            }
            else {
                setTimeout(() => {
                    console.log("2" + scrollRef.current)
                    observer.observe(scrollRef.current)
                    observerRerValue = scrollRef.current
                }, 1000)
            }

            console.log("bottom" + scrollRef)

            return () => {
                if (observerRerValue) {
                    observer.unobserve(observerRerValue)
                }
            }
        }
    }, [scrollRef, options])

    return [scrollRef, isVisible]
}