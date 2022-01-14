import { useState, useRef, useEffect } from 'react'
import { createUnparsedSourceFile } from 'typescript'

export let useCheckMenuItem = (options: any, menuItemOpen: boolean) => {

    const scrollRef = useRef<any>(null)
    const [isVisible, setIsVisible] = useState(true)



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log("Hey")

                let observerRerValue: HTMLInputElement | null = null

                if (entry.isIntersecting) {

                    console.log(entry)
                    if (entry.intersectionRatio) { }
                    console.log('It works!')
                }
                else {
                    console.log("unobserve gets called")
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
                console.log("start observing")
                observer.observe(scrollRef.current)

            }, 300)
        }

    }, [scrollRef, options]);

    return [scrollRef, isVisible]
}