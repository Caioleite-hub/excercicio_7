function ex01(){
    let soma = 0;
    let continuar = true;

    while(continuar == true){

        let numero = Number(prompt("Digite um número"));
e
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

function ex03(){
    let ganho_mensal = 0;
    let gasto_mensal = 0;
    let ganho_anual = 0;
    let gasto_anual = 0;
    let continuar = true;
    
    while(continuar == true){
        
    }
}
