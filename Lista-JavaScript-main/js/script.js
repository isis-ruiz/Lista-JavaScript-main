// exercício 01
const exercicio1 = () => {
  let resposta = document.getElementById("resposta");
  let resultadoHTML = " - ";
  for (let i = 1; i <= 10; i++) {
    resultadoHTML += i + " - ";
  }
  resposta.innerHTML = resultadoHTML;
};

//exercício 02
const exercicio2 = () => {
  let num = document.getElementById("num").value;

  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");

  resultado.innerHTML = "";
  erro.innerHTML = "";

  if (num === "" || num < 0) {
    erro.innerHTML = "Digite um número válido!";
    return;
  }

  let fim = parseInt(num);
  let respostadoTexto = " - ";

  for (let i = 0; i <= fim; i += 2) {
    respostadoTexto += i + " - ";
  }

  resultado.innerHTML = respostadoTexto;
};

// exercício 03
const exercicio3 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let valor = document.getElementById("num").value;
  let num = (valor);

  resultado.innerHTML = "";
  erro.innerHTML = "";

  if (valor === "" || num <= 0) {
    erro.innerHTML = "Digite um valor maior que 0";
    return;
  }

  if (num === 1) {
    resultado.innerHTML = "O número 1 não é primo";
    return;
  }

  let primo = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    resultado.innerHTML = `O número ${num} é primo`;
  } else {
    resultado.innerHTML = `O número ${num} não é primo`;
  }
};

//exercício  04
const exercicio4 = () => {
  let result = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num = document.getElementById("num").value;

  result.innerHTML = "";
  erro.innerHTML = "";

  if (num == "") {
    erro.innerHTML = "Indique um número";
  } else {
    result.innerHTML = "<h3>Tabuada = " + num + "</h3>";

    for (let i = 0; i <= 10; i++) {
      result.innerHTML += num + " x " + i + " = " + num * i + "<br>";
    }
  }
};
//exercicio 05
const exercicio5 = () => {
  let result = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num = document.getElementById("num").value;

  result.innerHTML = "";
  erro.innerHTML = "";

  if (num == "") {
    erro.innerHTML = "Insira um número";
  } else {
    result.innerHTML = "<h3>Números nones até " + num + "</h3>";

    let i = 0;

    while (i <= num) {
      if (i % 2 != 0) {
        result.innerHTML += i + "<br>";
      }
      i++;
    }
  }
};

//exercicio 06
const exercicio6 = () => {
  let result = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num = document.getElementById("num").value;

  result.innerHTML = "";
  erro.innerHTML = "";

  if (num == "") {
    erro.innerHTML = "Insira um número";
  } else {
    let i = 0;
    let soma = 0;

    while (i <= num) {
      if (i % 2 == 0) {
        soma += i;
      }
      i++;
    }
    result.innerHTML = "<h3>Soma dos elementos pares até " + num + "</h3>";
    result.innerHTML += "Resultado: " + soma;
  }
};
//exercicio 07
const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  let result = "";
  let i = 10;
  while (i >= 1) {
    result += i + " ";
    i--;
  }
  resposta.innerHTML = "<h2>Resposta da Atividade</h2>" + result;
};
//exercicio 08
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
//exercicio 9
const exercicio9 = () => {
  let resposta = document.getElementById("resposta");
  let resultado = " ! ";

  for (let i = 1; i <= 100; i++) {
    resultado += i + " ! ";
  }

  resposta.innerHTML = resultado;
};

//exercicio 10
let soma = 0;
let contador = 0;
const exercicio10 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  while (numero != "0") {
    soma += parseFloat(numero);
    contador++;
    numero = prompt("Digite um numero");
  }
  if (contador > 0) {
    resultado.innerHTML = `Total de números digitados foram ${contador}. A média da soma dos números digitados é: ${soma / contador}`;
    erro.innerHTML = "";
  }
  soma = 0;
  contador = 0;
};

//exercicio 11
const exercicio11 = () => {
  let resposta = document.getElementById("resposta");

  let resultado = "<h2>Resposta da Atividade</h2>";

  for (let i = 3; i <= 100; i += 3) {
    resultado += i + " ";
  }

  resposta.innerHTML = resultado;
};

// exercicio 12
const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (num === "" || num < 0) {
    erro.innerHTML = "Digite um número válido!";
    return;
  }
  let soma = 0;
  for (let i = 0; i < num.length; i++) {
    soma += parseInt(num[i]);
  }
  resultado.innerHTML = "Somatória dos números digitados: " + soma;
};

//exercicio 13
const exercicio13 = () => {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (num1 > num2) {
    erro.innerHTML = "O primeiro número deve ser menor que o segundo número!";
    return;
  }

  let primos = "";

  for (let i = num1; i <= num2; i++) {
    let ehPriminho = true;

    if (i < 2) {
      ehPriminho = false;
    } else {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          ehPriminho = false;
          break;
        }
      }
    }

    if (ehPriminho) {
      primos += i + " ";
    }
  }

  resultado.innerHTML = "Números primos: " + primos;
};

// exercicio 14
const exercicio14 = () => {
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  erro.innerHTML = "";
  resultado.innerHTML = "";

  let area =
    document.getElementById("num1").value *
    document.getElementById("num2").value;

  if (area <= 0) {
    erro.innerHTML = "Digite númeroa maiores que zero!";
    return;
  }

  resultado.innerHTML = "Área do retângulo é: " + area;
};
//exercicio 15

