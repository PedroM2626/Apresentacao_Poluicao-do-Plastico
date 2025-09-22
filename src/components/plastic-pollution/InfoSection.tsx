import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface InfoSectionProps {
  title: string
  children: React.ReactNode
  animationDirection?: 'left' | 'right' | 'up'
  className?: string
}

export const InfoSection = ({
  title,
  children,
  animationDirection = 'up',
  className,
}: InfoSectionProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  })

  const animationClass = {
    left: 'animate-fade-in-left',
    right: 'animate-fade-in-right',
    up: 'animate-fade-in-up',
  }[animationDirection]

  return (
    <section
      ref={ref}
      className={cn(
        'container mx-auto px-5 py-24 md:py-32 min-h-[60vh] flex items-center opacity-0',
        isVisible && animationClass,
        className,
      )}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 text-primary text-center">
          {title}
        </h2>
        <div className="prose prose-invert prose-lg max-w-none text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  )
}
