import { useState, useRef, useEffect } from 'react'
import { createUnparsedSourceFile } from 'typescript'

export let useCheckMenuItem = (options: any, menuItemOpen: boolean) => {

    const scrollRef = useRef<any>(null)
    const [isVisible, setIsVisible] = useState(true)



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

                let observerRerValue: HTMLInputElement | null = null

                if (entry.isIntersecting) {
                    if (entry.intersectionRatio) { }
                }
                else {
                    setIsVisible(entry.isIntersecting)
                    observer.unobserve(entry.target)
                    setTimeout(() => {
                        setIsVisible(true)
                    }, 20)
                }
            },
            options
        );
        if (scrollRef.current && isVisible) {
            setTimeout(() => {
                observer.observe(scrollRef.current)

            }, 400)
        }

    }, [scrollRef, options]);

    return [scrollRef, isVisible]
}