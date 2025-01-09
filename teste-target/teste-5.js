// Técnica:
// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverter(string) {
      let invertida = ' ';
      for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
      }
    
      return invertida;
    }
    
    const entradaDeDado = "Rafael Guilherme";
    const resultadoDeDado = inverter(entradaDeDado);

    
    console.log("Texto normal:", entradaDeDado);
    console.log("Texto invertido:", resultadoDeDado);
    