import { useEffect, useState, useRef, RefObject } from 'react'

interface UseScrollObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useScrollObserver = (
  options: UseScrollObserverOptions = {},
): [RefObject<HTMLDivElement>, boolean] => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (triggerOnce && containerRef.current) {
              observer.unobserve(containerRef.current)
            }
          } else if (!triggerOnce) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [containerRef, threshold, rootMargin, triggerOnce])

  return [containerRef, isVisible]
}
