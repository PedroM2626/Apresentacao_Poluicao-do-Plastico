import { useEffect, useRef, useState } from 'react'

type UseScrollAnimationOptions = {
  threshold?: number
  triggerOnce?: boolean
}

export const useScrollAnimation = <T extends HTMLElement>({
  threshold = 0.1,
  triggerOnce = true,
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false)
          }
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [ref, threshold, triggerOnce])

  return { ref, isVisible }
}
