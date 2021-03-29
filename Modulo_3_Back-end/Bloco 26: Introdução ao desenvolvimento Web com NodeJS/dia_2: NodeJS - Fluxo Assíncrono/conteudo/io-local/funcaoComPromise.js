function dividirNumeros(num1, num2) {
    const promise = new Promise((resolve, reject) => {
      if (num2 == 0) reject(Error("Não pode ser feito uma divisão por zero"));
  
      const resultado = num1 / num2;
      resolve(resultado)
    });
  
    return promise;
  }
  
  dividirNumeros(2, 1)
    .then(result => console.log("sucesso: %s", result))
    .catch(err => console.log("erro: %s", err.message));

//Sintaxe Promise

const p = new Promise((resolve, reject) => {
    // Aqui é onde vamos realizar a lógica que precisamos
    // para resolver ou rejeitar a promise
  });
  