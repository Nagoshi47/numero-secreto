alert("Boas vindas ao jogo do número secreto");

let max = 5
let min = 1

let numeroSecreto = getRandomNumber(min, max);

console.log(numeroSecreto);

let valorPlayer = parseInt(prompt(`chute um número entre ${min} e ${max}`));

while(numeroSecreto != valorPlayer){
    
    if(numeroSecreto != valorPlayer){
        if(valorPlayer > numeroSecreto){
            alert("O valor digitado é maior que o número secreto")
        }else{
            alert("O valor digitado é menor que o número secreto")
        }
    }
     valorPlayer = parseInt(prompt(`chute um número entre ${min} e ${max}`));
}

if (numeroSecreto == valorPlayer) {
    alert(`Ganhou! acertou o número secreto ${numeroSecreto}`);
}



function getRandomNumber(min, max){ 
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min);
}