 // ------------------- CORREÇAO --------------------------//
 
const exercicio1 = () => {
  // Capturar o elemento "Resposta"
  let resposta = document.getElementById("resposta");
  // Variavel para armazenar o resultado do programa
  let resultado = " # ";
  // Loop de 1 até 10 usando for
  for (let i = 1; i <= 10; i++) {
    resultado += i + " # ";
  }
  // Exibir o resultadO
  resposta.innerHTML = resultado;
};

const exercicio2 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    for (let i = 0; i <= numero; i += 2) {
      resultado.innerHTML += i + " ";
    }
    erro.innerHTML = "";
  }
};

const exercicio3 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let primo = true;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
    return;
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        primo = false;
      }
    }
  }
  if (primo) {
    resultado.innerHTML = `O número ${numero} é primo`;
    erro.innerHTML = "";
  } else {
    resultado.innerHTML = `O número ${numero} não é primo`;
    erro.innerHTML = "";
  }
};

const exercicio4 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
    return;
  } else {
    for (let i = 1; i <= 10; i++) {
      resultado.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
    }
    erro.innerHTML = "";
  }
};

const exercicio5 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let contador = 1;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    while (contador <= parseInt(numero)) {
      resultado.innerHTML += `${contador} `;
      contador += 2;
    }
    erro.innerHTML = "";
  }
};

const exercicio6 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let contador = 0;
  let soma = 0;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    while (contador <= parseInt(numero)) {
      soma += contador;
      contador += 2;
    }
    resultado.innerHTML = `A soma dos números pares de 0 até ${numero} é: ${soma}`;
    erro.innerHTML = "";
  }
};

const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  let retorno = "";
  let contador = 10;
  resposta.innerHTML = "";

  while (contador >= 1) {
    retorno += contador + " ";
    contador--;
  }
  resposta.innerHTML = `<h2>Resposta da Atividade</h2> ${retorno}`;
};

const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;

  // Limpar os campos da tela, caso tenha alguma coisa.
  resultado.innerHTML = "";
  erro.innerHTML = "";
  // Variavel para armazenar a palavra invertida
  let palavraInvertida = "";
  //Loop de 1 até o "tamanho" da palavra
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }
  // Exibir a palavra invertida no resultado
  resultado.innerHTML = `A palavra invertida é: ${palavraInvertida}`;
  erro.innerHTML = "";
  if (palavra == palavraInvertida) {
    resultado.innerHTML += "<br/> A palavra é um palíndromo";
  } else {
    resultado.innerHTML += "<br/> A palavra não é um palíndromo";
  }
};

const exercicio9 = () => {
  let resposta = document.getElementById("resposta");
  let soma = 0;
  resposta.innerHTML = "";

  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  resposta.innerHTML = `<h2>Resposta da Atividade</h2> 
                        <p>A soma dos números de 1 a 100 é: ${soma}</p>`;
};

let soma = 0;
let contador = 0;
const exercicio10 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  // if (numero != "0") {
  //   soma += parseFloat(numero);
  //   contador++;
  // }
  // resultado.innerHTML = `A média dos números digitados é: ${soma / contador}`;
  // erro.innerHTML = "";
  while (numero != "0") {
    soma += parseFloat(numero);
    contador++;
    numero = prompt("Digite um número: ");
  }
  if (contador > 0) {
    resultado.innerHTML = `Foram digitados ${contador} números. A média da soma dos números digitados é: ${soma / contador}`;
    erro.innerHTML = "";
  }
  soma = 0;
  contador = 0;
};

const exercicio11 = () => {
  let resposta = document.getElementById("resposta");
  let retorno = "";
  let retorno2 = "";
  resposta.innerHTML = "";

  for (let i = 0; i <= 100; i += 3) {
    retorno += i + " ";
  }
  resposta.innerHTML = `<h2>Resposta da Atividade</h2> 
                        <p>Multiplos de 3 de 0 a 100</p>${retorno}`;

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      retorno2 += i + " ";
    }
  }
  resposta.innerHTML += `<br/><p>Multiplos de 3 de 1 a 100</p>${retorno2}`;
};

const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  let soma = 0;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    for (let i = 0; i <= numero.length - 1; i++) {
      soma += parseInt(numero[i]);
    }
    resultado.innerHTML = `A soma dos dígitos do número ${numero} é: ${soma}`;
    erro.innerHTML = "";
  }
};

const exercicio13 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero1 = Number(document.getElementById("num1").value);
  let numero2 = Number(document.getElementById("num2").value);

  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  const ePrimo = (numero) => {
    let primo = true;
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        primo = false;
      }
    }
    return primo;
  };

  if (numero1 <= 0 || numero2 <= 0 || numero1 >= numero2) {
    erro.innerHTML =
      "Digite um número maior que 0 e o segundo número maior que o primeiro";
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = `Os números primos entre ${numero1} e ${numero2} são: `;
    for (let i = numero1; i <= numero2; i++) {
      if (ePrimo(i)) {
        resultado.innerHTML += i + " ";
      }
    }
    erro.innerHTML = "";
  }
};

const exercicio14 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero1 = Number(document.getElementById("num1").value);
  let numero2 = Number(document.getElementById("num2").value);
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (numero1 <= 0 || numero2 <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    let calculo = numero1 * numero2;
    resultado.innerHTML = `A área do retângulo é de: ${calculo} un²`;
    erro.innerHTML = "";
  }
};

const exercicio15 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  let vogais = ["a", "e", "i", "o", "u"];

  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (palavra.length < 1) {
    erro.innerHTML = "Digite no mínimo uma letra";
    resultado.innerHTML = "";
  } else {
    palavra = palavra.toLowerCase(); // Transforma o texto em letras minusculas
    for (let i = 0; i < palavra.length; i++) {
      if (vogais.includes(palavra[i])) {
        resultado.innerHTML += `A letra <b>${palavra[i]}</b> é uma vogal<br>`;
      } else {
        resultado.innerHTML += `A letra <b>${palavra[i]}</b> não é uma vogal<br>`;
      }
    }
    erro.innerHTML = "";
  }
};

const exercicio16 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num1").value;

  if (numero <= 0) {
    resultado.innerHTML = "";
    erro.innerHTML = "Digite um número maior que 0";
  } else {
    erro.innerHTML = "";
    let calculo = 2 * parseFloat(numero) * Math.PI;
    resultado.innerHTML = calculo;
  }
};

const exercicio17 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero1 = Number(document.getElementById("num1").value);
  let numero2 = Number(document.getElementById("num2").value);
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (numero1 <= 0 || numero2 <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    let calculo = (numero1 * numero2) / 2;
    resultado.innerHTML = `A área do triangulo é de: ${calculo} un²`;
    erro.innerHTML = "";
  }
};

const exercicio18 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero1 = Number(document.getElementById("num1").value);
  let numero2 = Number(document.getElementById("num2").value);
  let numero3 = Number(document.getElementById("num3").value);
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (numero1 <= 0 || numero2 <= 0 || numero3 <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    let calculo = ((numero1 + numero2) * numero3) / 2;
    resultado.innerHTML = `A área do trapézio é de: ${calculo} un²`;
    erro.innerHTML = "";
  }
};

const exercicio19 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  let letra = document.getElementById("letra").value;
  let vogais = ["a", "e", "i", "o", "u"];
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (letra.length > 1) {
    erro.innerHTML = "Digite apenas um caracter.";
    resultado.innerHTML = "";
  } else if (palavra.length < 1) {
    erro.innerHTML = "Digite uma palavra.";
    resultado.innerHTML = "";
  } else {
    let palavraVetor = palavra.split(""); // Quebra a frase em varias palavras
    for (let i = 0; i < palavraVetor.length; i++) {
      if (vogais.includes(palavraVetor[i])) {
        palavraVetor[i] = letra;
      }
    }
    palavra = palavraVetor.join(""); // Junta novamente as palavras
    resultado.innerHTML = `A palavra resultante é: ${palavra}`;
    erro.innerHTML = "";
  }
};

const exercicio20 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1) {
    erro.innerHTML = "Digite uma palavra.";
    resultado.innerHTML = "";
  } else {
    let fraseInvertida = frase.split(" ").reverse().join(" ");
    resultado.innerHTML = `A frase resultante é: ${fraseInvertida}`;
    erro.innerHTML = "";
  }
};

const exercicio21 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1) {
    erro.innerHTML = "Digite uma palavra.";
    resultado.innerHTML = "";
  } else {
    let fraseNova = frase.split(" ").join("");
    resultado.innerHTML = `A frase resultante é: ${fraseNova}`;
    erro.innerHTML = "";
  }
};

soma = 0;
contador = 0;
const exercicio22 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (soma < 100) {
    soma += parseFloat(numero);
    resultado.innerHTML = `A soma dos números digitados é: ${soma}`;
    erro.innerHTML = "";
  } else {
    resultado.innerHTML = `A soma já atingiu o limite de 100, o total é: ${soma}`;
    erro.innerHTML = "";
  }
};

const exercicio23 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  let frase = document.getElementById("frase").value;

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1 || palavra.length < 1) {
    erro.innerHTML = "Digite uma frase e uma palavra para realizar a contagem.";
    resultado.innerHTML = "";
  } else {
    let palavrasNaFrase = frase.split(" ");
    let contador = 0;
    for (let i = 0; i < palavrasNaFrase.length; i++) {
      if (palavrasNaFrase[i] == palavra) {
        contador++;
      }
    }
    resultado.innerHTML = `A palavra "${palavra}" aparece ${contador} vez(es) na frase.`;
    erro.innerHTML = "";
  }
};

const exercicio24 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1) {
    erro.innerHTML = "Digite uma frase para converter.";
    resultado.innerHTML = "";
  } else {
    let palavras = frase.split(" ");
    let fraseNova = palavras
      .map((palavra) => {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
      })
      .join(" ");
    resultado.innerHTML = `A frase resultante é: ${fraseNova}`;
    erro.innerHTML = "";
  }
};

const exercicio25 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    erro.innerHTML = "Digite três números válidos.";
    resultado.innerHTML = "";
  } else {
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    resultado.innerHTML = `Os números em ordem crescente são: ${numeros.join(", ")}`;
    erro.innerHTML = "";
  }
};
