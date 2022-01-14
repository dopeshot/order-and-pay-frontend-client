import { useState, useRef, useEffect } from 'react'
import { createUnparsedSourceFile } from 'typescript'

export let useCheckMenuItem = (options: any, menuItemOpen: boolean) => {
    const scrollRef = useRef<any>(null)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(entry);
                let observerRerValue: HTMLInputElement | null = null

                if (entry.isIntersecting) {
                    setIsVisible(entry.isIntersecting)
                    console.log(entry)
                    if (entry.intersectionRatio) { }
                    console.log('It works!')
                }
                else {
                    observer.unobserve(entry.target)
                }
            },
            options
        );
        if (scrollRef.current) {
            setTimeout(() => {
                observer.observe(scrollRef.current)

            }, 300)
        }

    }, [scrollRef, options]);

    return [scrollRef, isVisible]
}