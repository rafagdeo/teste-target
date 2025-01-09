// Técnica:// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const { error } = require('console');
const fs = require('fs');
const path = require('path');

try {
  const filePath = path.resolve(__dirname, 'faturamento.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  if (!Array.isArray(data)) {
    throw new Error(error);
  }

  const diasComFaturamento = data.filter((valor) => valor > 0);
  console.log(data);

  if (diasComFaturamento.length == 0) {
    throw new Error('Não há dias com faturamento positivo.');
  }
  const menorFaturamento = Math.min(...diasComFaturamento);
  const maiorFaturamento = Math.max(...diasComFaturamento);
  const somaFaturamento = diasComFaturamento.reduce((acc, curr) => acc + curr, 0);
  const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
  const diasAcimaDaMedia = diasComFaturamento.filter((valor) => valor > mediaFaturamento).length;

  console.log('Menor valor de faturamento diário:', menorFaturamento.toFixed(2));
  console.log('Maior valor de faturamento diário:', maiorFaturamento.toFixed(2));
  console.log('Dias com faturamento acima da média mensal:', diasAcimaDaMedia);
} catch (error) {
  console.error('Erro ao carregar ou processar o arquivo:', error.message);
}
