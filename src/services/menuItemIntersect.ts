import { useState, useRef, useEffect } from 'react'

export let useCheckMenuItem = (options: any, menuItemOpen: boolean) => {

    const scrollRef = useRef<any>(null)
    const [isVisible, setIsVisible] = useState(true)



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {


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
                if (scrollRef.current)
                    observer.observe(scrollRef.current)

            }, 200)
        }

    }, [scrollRef, options, isVisible]);

    return [scrollRef, isVisible]
}