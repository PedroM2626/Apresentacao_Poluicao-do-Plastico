import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const sources = [
  'https://agenciabrasil.ebc.com.br/geral/noticia/2023-03/brasil-gerou-64-quilos-de-residuos-plasticos-por-pessoa-em-2022?',
  'https://www.unep.org/pt-br/noticias-e-reportagens/reportagem/tudo-o-que-voce-precisa-saber-sobre-poluicao-plastica',
  'https://g1.globo.com/natureza/noticia/2019/02/08/como-o-plastico-mudou-a-sociedade-brasileira.ghtml',
  'https://cee.fiocruz.br/?q=Plasticos-e-saude-global',
  'https://cestosdelixoelixeiras.com.br/blog-lixeiras/quais-sao-os-impactos-do-plastico-no-meio-ambiente',
  'https://www.aguasustentavel.org.br/conteudo/blog/228-o-que-sao-as-ilhas-de-plastico-e-quais-seus-impactos-no-meio-ambiente',
  'https://www.ecodebate.com.br/2022/12/23/impactos-dos-plasticos-nos-oceanos/',
  'https://www.cnnbrasil.com.br/saude/pesquisadores-da-usp-encontram-microplasticos-no-cerebro-de-oito-pessoas/#google_vignette',
  'https://www.europarl.europa.eu/topics/pt/article/20181116STO19217/microplasticos-origens-efeitos-e-solucoes',
  'https://www.cnnbrasil.com.br/saude/como-a-presenca-de-microplastico-no-corpo-humano-pode-afetar-nossa-saude/',
  'https://www.sp.senac.br/blog/artigo/plastico-no-meio-ambiente',
  'https://www.iberdrola.com/sustentabilidade/poluicao-plastica-nos-oceanos',
]

export const SourcesSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  })

  return (
    <footer
      ref={ref}
      className={cn(
        'bg-card py-16 opacity-0',
        isVisible && 'animate-fade-in-up',
      )}
    >
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 text-primary text-center">
          Fontes
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {sources.map((url, index) => (
            <li key={index}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors duration-200 break-all text-sm"
              >
                {url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
