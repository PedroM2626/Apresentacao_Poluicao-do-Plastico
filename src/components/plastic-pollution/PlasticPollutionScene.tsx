import { useState, useEffect } from 'react'
import { useScroll } from '@/hooks/useScroll'
import { PlasticItem } from './PlasticItem'
import camada1 from '@/images/camada1.jpg'
import camada2 from '@/images/camada2.jpg'
import camada3 from '@/images/camada3.jpg'
import copoPlastico from '@/images/copoplastico.png'
import copoPlastico2 from '@/images/copoplastico2.png'
import copoPlastico3 from '@/images/copoplastico3.png'
import copoAluminio from '@/images/copoaluminio.png'
import iogurteEmbalagem from '@/images/iogurteembalagem.png'
import patoBorracha from '@/images/patoborracha.png'
import sacoPlastico from '@/images/sacoplastico.png'
import sacoSacola from '@/images/sacoesacolaplastica.png'

const plasticItemsData = [
  {
    id: 'cup1',
    name: 'Copo Plástico',
    description:
      'Copos plásticos, frequentemente usados por poucos minutos, persistem no ambiente por até 50 anos, liberando substâncias químicas.',
    imageSrc: copoPlastico,
    position: { top: '65%', left: '20%' },
    appearAt: 0.5,
  },
  {
    id: 'cup2',
    name: 'Copo Plástico 2',
    description:
      'Copos plásticos são um dos principais poluentes encontrados em ambientes naturais, demorando décadas para se decompor.',
    imageSrc: copoPlastico2,
    position: { top: '75%', left: '35%' },
    appearAt: 0.6,
  },
  {
    id: 'cup3',
    name: 'Copo Plástico 3',
    description:
      'O descarte inadequado de copos plásticos contribui significativamente para a poluição do solo e da água.',
    imageSrc: copoPlastico3,
    position: { top: '70%', left: '60%' },
    appearAt: 0.7,
  },
  {
    id: 'aluminum_cup',
    name: 'Copo de Alumínio',
    description:
      'Embora seja reciclável, quando descartado incorretamente, o alumínio pode contaminar o solo e a água.',
    imageSrc: copoAluminio,
    position: { top: '80%', left: '75%' },
    appearAt: 0.8,
  },
  {
    id: 'yogurt',
    name: 'Embalagem de Iogurte',
    description:
      'Embalagens de iogurte são difíceis de reciclar devido à mistura de materiais plásticos.',
    imageSrc: iogurteEmbalagem,
    position: { top: '85%', left: '15%' },
    appearAt: 0.85,
  },
  {
    id: 'rubber_duck',
    name: 'Pato de Borracha',
    description:
      'Brinquedos de borracha quando descartados incorretamente podem levar centenas de anos para se decompor.',
    imageSrc: patoBorracha,
    position: { top: '90%', left: '45%' },
    appearAt: 0.9,
  },
  {
    id: 'plastic_bag',
    name: 'Saco Plástico',
    description:
      'Sacolas plásticas são leves e facilmente transportadas pelo vento, poluindo vastas áreas.',
    imageSrc: sacoPlastico,
    position: { top: '95%', left: '25%' },
    appearAt: 0.95,
  },
  {
    id: 'plastic_bag2',
    name: 'Sacola Plástica',
    description:
      'Sacolas plásticas demoram cerca de 20 anos para se decompor e ameaçam a vida selvagem.',
    imageSrc: sacoSacola,
    position: { top: '88%', left: '65%' },
    appearAt: 1.0,
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

  const transitionProgress = vh > 0 ? scrollY / vh : 0
  const contentY = -transitionProgress * vh

  const plasticProgress =
    vh > 0 ? Math.max(0, Math.min(1, (scrollY - 2 * vh) / vh)) : 0

  return (
    <div className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <div
          className="absolute top-0 left-0 w-full h-[300vh]"
          style={{ transform: `translateY(${contentY}px)` }}
        >
          {/* Camada 1: Árvore */}
          <div className="h-screen w-full">
            <img
              src={camada1}
              alt="Árvore"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Camada 2: Raiz */}
          <div className="h-screen w-full">
            <img
              src={camada2}
              alt="Raiz"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Camada 3: Solo com objetos poluentes */}
          <div className="h-screen w-full relative">
            <img
              src={camada3}
              alt="Solo"
              className="w-full h-full object-cover"
            />
            {plasticItemsData.map((item) => {
              const itemAppearDenominator = 1 - item.appearAt
              const itemAppearProgress =
                itemAppearDenominator > 0
                  ? (plasticProgress - item.appearAt) / itemAppearDenominator
                  : plasticProgress === 1
                  ? 1
                  : 0
              const itemAppear = Math.max(0, itemAppearProgress)
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
