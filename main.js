let numero1 = document.getElementById ("numero1");
let numero2  = document.getElementById ("numero2");
let resultado = document.getElementById ("res");

let adicao = document.getElementById ("adi");
let subtracao = document.getElementById ("sub");
let multiplicacao = document.getElementById ("mult");
let divisao = document.getElementById ("div");

adicao.addEventListener("click", function(){
  let soma = Number(numero1.value) + Number(numero2.value);
  resultado.textContent = soma;
});
subtracao.addEventListener("click", function (){
  let diferenca = Number(numero1.value) - Number(numero2.value);
  resultado.textContent = diferenca;
})
multiplicacao.addEventListener("click", function(){
  let multiplicar = Number(numero1.value) * Number(numero2.value);
  resultado.textContent = multiplicar;
})
divisao.addEventListener("click", function(){
  let dividir = Number(numero1.value) / Number(numero2.value);
  resultado.textContent = dividir;
})
