//alert("Bem vindo ao Quick Jobs! \n \n Aperte enter para continuar!"); 

function exibeVaga(){

    let resposta = Number(prompt(" **** Deseja se candidatar para a vaga de XXXXXXXXXX na empresa XXXXXX? \n [1] Sim \n [2] Não"));

    if(resposta == 1){
        alert("Ótimo! Mostraremos os requisitos a seguir"); 
        alert("REQUISITOS \n \n \n 1- Ensino médio completo \n 2- Possuir conhecimentos em C e C++ \n 3- Conhecer a IDE CodeBlocks muito bem \n 5- Estar cursando ADS na FAM \n \n \n \ XXXXXXXXXXXX");
        questions();  
    }else{
        alert("Esperamos que encontre sua vaga logo! Para sair é só atualizar a página");
    }


}

function questions(){
    
    let passou;
    let quase; 
    
    let req1 = Number(prompt("Você tem ensino medio completo? \n [1] Sim \n [2] Não"));
    let req2 = Number(prompt("[ELIMINATORIA] Você conhece C e C++? \n [1] Sim \n [2] Não"));
    let req3 = Number(prompt("[ELIMINATORIA] Você conhece a IDE codeblocks muito bem? \n [1] Sim \n [2] Não"));
    let req4 = Number(prompt("Você estuda na FAM no curso de ADS? \n [1] Sim \n [2] Não"));

    if(req1 == 1 && req2 == 1 && req3 == 1 && req4 ==1){
        passou = true; 
        quase = false;
    }
    else if((req1 == 2 && req2 == 1 && req3 == 1 && req4 ==1) || (req1 == 1 && req2 == 1 && req3 == 1 && req4 ==2)){
        passou = true; 
        quase = true; 
    }
    else if((req2 == 2 || req3 == 2)){
        passou = false;
    }
    else{
        alert("Entradas inválidas, recomece!");
        questions()
    }


    if(passou == true && quase==false){
        alert("Passou totalmente!");
    }
    else if(passou == true && quase == true){
        alert("passou metade");
    }
    else if(passou == false){
        alert("Não passou");
    }
  


}




