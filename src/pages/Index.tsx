import { InfoSection } from '@/components/plastic-pollution/InfoSection'
import { PlasticPollutionScene } from '@/components/plastic-pollution/PlasticPollutionScene'
import { SourcesSection } from '@/components/plastic-pollution/SourcesSection'
import { DecompositionTable } from '@/components/decomposition-table/DecompositionTable'

const content = {
  introducao: {
    title: 'Introdução',
    text: 'O uso do plástico se tornou onipresente em nosso cotidiano, sendo utilizados desde a embalagens de produtos até no setor de construção civil e o de saúde. O primeiro plástico sintético foi inventado em 1909, tendo a intenção de ser um substituto barato para materiais como o marfim, por exemplo, com os anos conseguintes assegurando a criação de outros plásticos, como o poliéster, náilon e o PVC, com diversos usos no mercado, tais como a criação de discos de vinil, por exemplo. Seria apenas após a Segunda Guerra Mundial, porém, que o uso do plástico chegaria aos níveis em que vemos atualmente, com sua acessibilidade e praticidade permitindo que este seja usado em quase todas as áreas, levando ao contexto em que nos encontramos atualmente. Contudo, apesar desse material realmente ser bastante útil, ele traz diversas preocupações decorrentes dos efeitos nocivos que pode causar no meio ambiente, seja na poluição terrestre, poluição marinha, degradação de ecossistemas, etc. Tornando se indispensável a discussão dessa questão e de como mitigar tais problemas.',
  },
  persistencia: {
    title: 'Persistência na natureza',
    text: 'Uma das características mais preocupantes do plástico é sua persistência na natureza, já que o período de decomposição desse material é bastante longo, podendo demorar até centenas de anos dependendo do tipo de produto. Somados ao longo tempo de decomposição, o plástico é muitas vezes descartado de forma inadequada e não é reciclado, levando a criação de lixões a céu aberto e o depósito de lixo no mar. Dados divulgados pela Abrelpe (Associação Brasileira das Empresas de Limpeza Pública) em 2017 mostram que o Brasil possui quase 3 mil lixões ou aterros irregulares - o que impacta a qualidade de vida de 77 milhões de brasileiros através da poluição do solo, ar e proliferação de doenças, enquanto o relatório Fragmentos da Destruição, realizado pela ONU, divulgou que 1,3 milhão de toneladas de plástico são lançadas anualmente, afetando o meio marinho a medida que o plástico degradado pode ser ingerido por animais, resultando em sua morte, e impede a penetração de oxigênio nos sedimentos, comprometendo também o ciclo bioquímico da flora marinha.',
  },
  microplasticos: {
    title: 'Microplásticos',
    text: 'Os microplásticos são minúsculos pedaços de material plástico com menos de 5 milímetros, podendo ser resultados da degradação de plásticos maiores ou terem sido feitos intencionalmente desse tamanho, mas serem liberados no meio ambiente por acidente. Dados da ONU de 2017 demonstram que há 51 bilhões de partículas micro plásticas nos mares, 500 vezes mais do que estrelas na nossa galáxia. Estes microplásticos, por sua vez, são ingeridos por animais marinhos, e podem acabar no corpo humano através da cadeia alimentar. Microplásticos também foram encontrados em alimentas e bebidas, e recentemente encontrados até no cérebro humano, segundo uma pesquisa da Faculdade de Medicina da USP. Os efeitos dos microplásticos no corpo humano ainda são muito desconhecidos, porém há preocupações em relação a alterações hormonais, problemas no sistema circulatório e impactos no sistema cardíaco, dentre outras possíveis consequências que ainda estão sendo estudadas.',
  },
  oceanos: {
    title: 'Poluição dos oceanos',
    text: 'Como mencionado anteriormente, o plástico é muitas vezes descartado no oceano, levando a diversos efeitos nocivos na fauna e flora. A fundação EllenMacArthur prevê que, até 2050, haverá mais plástico no oceano do que peixes, demonstrando a alta quantidade de plástico que é jogado no oceano. A presença desse material em corpos marinhos leva a criação de ilhas de plástico, concentrações de resíduos plásticos flutuantes nos oceanos ao redor do mundo, resultando em diversas consequências como danos à vida marinha que entra em contato com o plástico, ingerindo ele ou ficando preso; contaminação química, a partir das substâncias tóxicas que os plásticos podem liberar; a quebra na cadeia alimentar e inserção do plástico no corpo humano já mencionado anteriormente, e a poluição visual, que pode afetar os setores do turismo e pesca.',
  },
  terrestre: {
    title: 'Poluição terrestre',
    text: 'O descarte inadequado do plástico no solo é responsável por causar diversos efeitos nocivos ao meio ambiente, com dados da ONU revelando que mais de 280 milhões de toneladas de produtos plásticos de curta duração se tornam resíduos. Dentre os mais notáveis podem ser mencionados a contaminação do solo, visto que os plásticos podem liberar substâncias tóxicas capazes de infiltrar na terra, afetando microrganismos e lençóis freáticos; compactação do solo, onde a acumulação do plástico no solo dificulta a passagem de ar, água e nutrientes, dificultando o crescimento de plantas e facilitando a chance de acidentes relacionadas a enchentes ocorrerem; por fim, temos a superlotação de lixões e aterros, que contribuem para contaminação do solo e água e atuam como vetores de proliferação de doenças, com dados da Agência Brasil demonstrando que o Brasil gerou 64 quilos de resíduos plásticos por pessoa em 2022, sendo este um número alarmante.',
  },
}

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <PlasticPollutionScene />
      <div className="relative z-30 bg-background">
        <InfoSection title={content.introducao.title} animationDirection="left">
          <p>{content.introducao.text}</p>
        </InfoSection>
        <InfoSection
          title={content.persistencia.title}
          animationDirection="right"
          className="bg-card"
        >
          <p>{content.persistencia.text}</p>
        </InfoSection>
        <InfoSection
          title={content.microplasticos.title}
          animationDirection="left"
        >
          <p>{content.microplasticos.text}</p>
        </InfoSection>
        <InfoSection
          title={content.oceanos.title}
          animationDirection="right"
          className="bg-card"
        >
          <p>{content.oceanos.text}</p>
        </InfoSection>
        <InfoSection title={content.terrestre.title} animationDirection="left">
          <p>{content.terrestre.text}</p>
        </InfoSection>
        <DecompositionTable />
      </div>
      <SourcesSection />
    </div>
  )
}

export default Index
