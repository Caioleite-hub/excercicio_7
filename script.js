function ex01(){
    let soma = 0;
    let continuar = true;

    while(continuar == true){

        let numero = Number(prompt("Digite um número"));

        soma = soma + numero;

        console.log(soma);

        let resposta = prompt("Deseja continuar? (s/n)");

        if(resposta == "n"){
            continuar = false;
        }


    }
    console.log("Soma total: ", soma);
}

function ex02(){

    for(let i = 10; i>= 0; i--){
        console.log(i);
    }

    console.log("Lançamento realizado!");
}