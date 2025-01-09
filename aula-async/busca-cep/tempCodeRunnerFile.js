// fetch('https://viacep.com.br/ws/02303050/json/')
//       .then((response) => {
//       response.json().then((dados) => console.log(dados));   
//       }).catch((err) => {
//       console.log(err);      
      
// })

async function obterDadosDoCep() {
      try {
            const response = await fetch('https://viacep.com.br/ws/02303050/json/')
            const dados = await response.json();
      
            console.log(dados);
      }  catch (erro) {
            console.log('deu erro', erro);
      ) finally {
            console.log('terminou');
            
      }
}
obterDadosDoCep();