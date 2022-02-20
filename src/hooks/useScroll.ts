import { useState, useRef, useEffect } from 'react'


//Hook for the Intersection observer that watches the scrolling category buttons
export const useScrollToNav = (options: any) => {
	const scrollRef = useRef<any>(null)
	const [isVisible, setIsVisible] = useState(true)

	const callBackFunction = (entries: any) => {
		const [entry] = entries
		setIsVisible(entry.isIntersecting)
	}

	useEffect(() => {
		let observerRerValue: HTMLInputElement | null = null
		const observer = new IntersectionObserver(callBackFunction, options)

		if (scrollRef.current) {
			observer.observe(scrollRef.current)
			observerRerValue = scrollRef.current
		}

		return () => {
			if (observerRerValue) observer.unobserve(observerRerValue)
		}
	}, [scrollRef, options])

	return [scrollRef, !isVisible]
}
