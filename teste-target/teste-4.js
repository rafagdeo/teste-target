// Técnica:
// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

// Para calcular a porcentagem de representação de um valor, multiplique o valor pela porcentagem e divida o resultado por 100.            
// Por exemplo, para calcular 35% de 500, multiplique 35 por 500 e divida o resultado por 100:     
// 35 x 500 = 17500 
// 17500 % 100 = 175
// 35% de 500 = 175 

const faturamento = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53,
    };

    const total = Object.values(faturamento).reduce((acumulador, valor) => acumulador + valor, 0);
    
    console.log("Percentual de representação por estado:");
    for (const estado in faturamento) {
      const percentual = (faturamento[estado] / total) * 100;
      console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
    