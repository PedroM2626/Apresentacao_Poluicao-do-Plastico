import React from 'react';

const decompositionData = [
  { product: 'Sacola plástica fina', polymer: 'PEBD (Polietileno de Baixa Densidade)', time: '200 a 400 anos' },
  { product: 'Canudos plásticos', polymer: 'PP ou PE', time: '200 anos' },
  { product: 'Copos descartáveis transparentes', polymer: 'PP (Polipropileno)', time: '200 a 450 anos' },
  { product: 'Potes de margarina/sorvete', polymer: 'PP (Polipropileno)', time: '200 a 300 anos' },
  { product: 'Sacola plástica grossa/reutilizável', polymer: 'PEAD (Polietileno de Alta Densidade)', time: '300 a 500 anos' },
  { product: 'Baldes, brinquedos, bacias', polymer: 'PEAD ou PP', time: '250 a 500 anos' },
  { product: 'Copos de isopor', polymer: 'PS expandido (Poliestireno/EPS)', time: '400 a 500 anos' },
  { product: 'Talheres descartáveis', polymer: 'PS (Poliestireno rígido)', time: '400 a 500 anos' },
  { product: 'Máscaras descartáveis (COVID-19)', polymer: 'PP (Polipropileno)', time: '400 a 450 anos' },
  { product: 'Embalagem de salgadinho', polymer: 'PET + Alumínio + PE (multicamadas)', time: '> 400 anos' },
  { product: 'Garrafas PET (refrigerante, água)', polymer: 'PET (Polietileno Tereftalato)', time: '400 a 600 anos' },
  { product: 'Pato de borracha/brinquedos maleáveis', polymer: 'PVC (Policloreto de Vinila)', time: '400 a 1000 anos' },
  { product: 'Cartão de crédito', polymer: 'PVC', time: '500 a 1000 anos' },
  { product: 'Latas de alumínio (revestimento interno plástico)', polymer: 'Alumínio + resina epóxi (plástica)', time: '200-400 anos' },
];

export const DecompositionTable: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
          Tempo de Decomposição dos Plásticos
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-card border border-border rounded-lg shadow-lg">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Produto/Objeto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Tipo de Polímero Principal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Tempo Médio de Decomposição
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {decompositionData.map((item, index) => (
                <tr key={index} className="hover:bg-muted/20">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                    {item.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {item.polymer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {item.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};