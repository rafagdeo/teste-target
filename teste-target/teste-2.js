// Técnica:
// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacci(numero) {
      if (numero <= 0) return [];
      if (numero === 1) return [0];
      if (numero === 2) return [0, 1];
    
      const sequencia = [0, 1];
      for (let i = 2; i < numero; i++) {
        sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
      }
      return sequencia;
    }
    const n = 10; 
    console.log(fibonacci(n));