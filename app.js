alert("Boas vindas ao jogo do número secreto");

let max = 100;
let min = 1;

let tentativas = 1;


let numeroSecreto = getRandomNumber(min, max);

console.log(numeroSecreto);

let valorPlayer = parseInt(prompt(`chute um número entre ${min} e ${max}`));
 
while(numeroSecreto != valorPlayer){


    if(valorPlayer > numeroSecreto){
        alert("O valor digitado é maior que o número secreto");
    }else{
        alert("O valor digitado é menor que o número secreto");
    }
    valorPlayer = parseInt(prompt(`chute um número entre ${min} e ${max}`));

    tentativas ++;
}


let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Ganhou! acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

    


function getRandomNumber(min, max){ 
    return Math.floor(Math.random() * (max - min) + min);
}