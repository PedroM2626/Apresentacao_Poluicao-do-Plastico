import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

interface PlasticItemProps {
  imageSrc: string
  name: string
  description: string
  className?: string
  style?: React.CSSProperties
}

export const PlasticItem = ({
  imageSrc,
  name,
  description,
  className,
  style,
}: PlasticItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'absolute transition-transform duration-300 ease-out-quad hover:scale-110 hover:z-10 focus:outline-none focus:ring-2 focus:ring-primary rounded-full',
          className,
        )}
        style={style}
        aria-label={`Learn more about ${name}`}
      >
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-contain"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full">
            <span className="text-white text-center font-bold">Saiba mais</span>
          </div>
        )}
      </button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-card border-border text-foreground">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">{name}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={imageSrc}
              alt={name}
              className="w-32 h-32 object-contain flex-shrink-0"
            />
            <p className="text-base text-muted">{description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
