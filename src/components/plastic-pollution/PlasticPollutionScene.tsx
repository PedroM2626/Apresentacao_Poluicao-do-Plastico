import { useState, useEffect } from 'react'
import { useScroll } from '@/hooks/useScroll'
import { PlasticItem } from './PlasticItem'

const plasticItemsData = [
  {
    id: 'bottle',
    name: 'Garrafa Plástica',
    description:
      'Garrafas PET podem levar mais de 400 anos para se decompor. Elas fragmentam-se em microplásticos, contaminando o solo e a água.',
    imageSrc:
      'https://img.usecurling.com/p/150/150?q=plastic%20bottle%20on%20ground',
    position: { top: '55%', left: '20%' },
    appearAt: 0.5,
  },
  {
    id: 'bag',
    name: 'Sacola Plástica',
    description:
      'Sacolas plásticas são leves e facilmente transportadas pelo vento, poluindo vastas áreas. Demoram cerca de 20 anos para se decompor.',
    imageSrc:
      'https://img.usecurling.com/p/120/120?q=plastic%20bag%20on%20ground',
    position: { top: '70%', left: '40%' },
    appearAt: 0.6,
  },
  {
    id: 'cup',
    name: 'Copo Descartável',
    description:
      'Copos plásticos, frequentemente usados por poucos minutos, persistem no ambiente por até 50 anos, liberando substâncias químicas.',
    imageSrc:
      'https://img.usecurling.com/p/100/100?q=plastic%20cup%20on%20ground',
    position: { top: '60%', left: '75%' },
    appearAt: 0.7,
  },
  {
    id: 'straw',
    name: 'Canudo Plástico',
    description:
      'Canudos são um grande perigo para a vida selvagem, especialmente a marinha. Sua decomposição pode levar até 200 anos.',
    imageSrc:
      'https://img.usecurling.com/p/80/80?q=plastic%20straw%20on%20ground',
    position: { top: '85%', left: '15%' },
    appearAt: 0.85,
  },
  {
    id: 'wrapper',
    name: 'Embalagem de Alimento',
    description:
      'Embalagens flexíveis, como de salgadinhos, são difíceis de reciclar e se decompõem em centenas de anos, poluindo o solo.',
    imageSrc:
      'https://img.usecurling.com/p/130/130?q=food%20wrapper%20on%20ground',
    position: { top: '80%', left: '60%' },
    appearAt: 0.95,
  },
]

export const PlasticPollutionScene = () => {
  const { scrollY } = useScroll()
  const [vh, setVh] = useState(1080)

  useEffect(() => {
    const handleResize = () => setVh(window.innerHeight)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const transitionProgress = vh > 0 ? Math.max(0, Math.min(1, scrollY / vh)) : 0
  const contentY = -transitionProgress * vh

  const plasticProgress =
    vh > 0 ? Math.max(0, Math.min(1, (scrollY - vh * 0.5) / (vh * 1.5))) : 0

  return (
    <div className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <div
          className="absolute top-0 left-0 w-full h-[200vh]"
          style={{ transform: `translateY(${contentY}px)` }}
        >
          <div className="h-screen w-full">
            <img
              src="https://img.usecurling.com/p/1920/1080?q=realistic%20tree%20with%20roots%20in%20soil"
              alt="Tree with roots in soil"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-screen w-full relative">
            <img
              src="https://img.usecurling.com/p/1920/1080?q=realistic%20clean%20soil%20cross%20section"
              alt="Clean soil cross-section"
              className="w-full h-full object-cover"
            />
            {plasticItemsData.map((item) => {
              const itemAppear =
                (plasticProgress - item.appearAt) / (1 - item.appearAt)
              const opacity = Math.max(0, Math.min(1, itemAppear * 5))
              const scale = 0.8 + opacity * 0.2
              return (
                <PlasticItem
                  key={item.id}
                  {...item}
                  className="w-16 h-16 md:w-24 md:h-24"
                  style={{
                    ...item.position,
                    opacity,
                    transform: `scale(${scale})`,
                    transition:
                      'opacity 0.4s ease-out, transform 0.4s ease-out',
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
