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
    name: 'Copo de Isopor',
    description:
      'Estudos mostram que copos de isopor podem liberar estireno (monômero do poliestireno), especialmente em contato com líquidos quentes, gordurosos ou ácidos. O estireno é classificado pela IARC (OMS) como possivelmente carcinogênico (capaz de causar ou estimular o desenvolvimento de câncer) para humanos.',
    imageSrc: copoPlastico,
    position: { top: '35%', left: '10%' },
    appearAt: 0.5,
  },
  {
    id: 'cup2',
    name: 'Copo Plástico',
    description:
      'Mesmo copos de papel (“paper cups”) geralmente têm um revestimento plástico para vedação (ex: polietileno). Esse revestimento se deteriora com água quente.',
    imageSrc: copoPlastico2,
    position: { top: '45%', left: '85%' },
    appearAt: 0.6,
  },
  {
    id: 'cup3',
    name: 'Copo Plástico',
    description:
      'Alto custo de gerenciamento de resíduos, baixa taxa de reciclagem (no Brasil, cerca de 3% para plásticos)',
    imageSrc: copoPlastico3,
    position: { top: '55%', left: '30%' },
    appearAt: 0.7,
  },
  {
    id: 'aluminum_cup',
    name: 'Lata de Alumínio',
    description:
      'Apesar do corpo principal de alumínio ser 100% reciclável existe uma camada fina de resina plástica (geralmente epóxi com bisfenol A ou derivados) para evitar que o metal reaja com a bebida (principalmente refrigerantes ácidos e cerveja).resina epóxi pode liberar traços de bisfenóis (BPA, BPS, BPF), que são desreguladores endócrinos e em bebidas ácidas, quentes ou armazenadas por longos períodos, essa migração pode aumentar. Estudos apontam que mesmo em níveis baixos, a exposição crônica ao BPA está ligada a alterações hormonais, problemas metabólicos e risco aumentado de alguns tipos de câncer.  ',
    imageSrc: copoAluminio,
    position: { top: '65%', left: '75%' },
    appearAt: 0.8,
  },
  {
    id: 'yogurt',
    name: 'Embalagem',
    description:
      'Em lixões, embalagens podem liberar corantes, metais e aditivos que lixiviam para o solo e lençóis freáticos. No mar, são uma das maiores fontes de lixo costeiro.',
    imageSrc: iogurteEmbalagem,
    position: { top: '70%', left: '5%' },
    appearAt: 0.85,
  },
  {
    id: 'rubber_duck',
    name: 'Pato de Borracha',
    description:
      'O pato de borracha, aquele brinquedo clássico de banho, parece inofensivo...',
    imageSrc: patoBorracha,
    position: { top: '30%', left: '50%' },
    appearAt: 0.9,
  },
  {
    id: 'plastic_bag',
    name: 'Sacola Plástica',
    description:
      'Estudos de laboratório mostram que partículas liberadas por sacolas alteram propriedades do solo, como retenção de água e porosidade. Também podem interferir na germinação e crescimento de plantas: por exemplo, sementes de alface cultivadas em solos contaminados com fragmentos de sacolas apresentaram redução na taxa de germinação e menor desenvolvimento radicular.',
    imageSrc: sacoPlastico,
    position: { top: '50%', left: '60%' },
    appearAt: 0.95,
  },
  {
    id: 'plastic_bag2',
    name: 'Embalagem de salgadinho',
    description:
      'Por conta da mistura de plástico + alumínio, a decomposição pode ultrapassar 400 anos. O alumínio em si é reciclável, mas como está colado ao plástico, acaba descartado.',
    imageSrc: sacoSacola,
    position: { top: '60%', left: '20%' },
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

  // Definição das fases de rolagem
  const scrollPhase1End = 2 * vh // Fim da rolagem pelas camadas 1 e 2
  const scrollPhase2End = 3 * vh // Fim da aparição dos itens (pausa aqui)

  let contentY

  if (scrollY <= scrollPhase1End) {
    // Fase 1: Anima através das camadas 1 e 2.
    contentY = -scrollY
  } else if (scrollY <= scrollPhase2End) {
    // Fase 2: Mantém na camada 3 (efeito de "trava").
    contentY = -scrollPhase1End
  } else {
    // Fase 3: Retoma a rolagem para revelar o resto da página.
    contentY = -scrollPhase1End - (scrollY - scrollPhase2End)
  }

  // Progresso para a aparição dos itens de plástico (acontece na Fase 2)
  const plasticProgress =
    vh > 0
      ? Math.max(
          0,
          Math.min(
            1,
            (scrollY - scrollPhase1End) / (scrollPhase2End - scrollPhase1End),
          ),
        )
      : 0

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
                  : plasticProgress >= 1 // Garante que itens em 1.0 apareçam
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
