var cont

cont = 0
while(cont<=3){
    alert("Aborrencendo o usuário" + cont + " x")
    cont++
}
for(cont=0;cont<5; cont++)
{
    if(cont==0){
        alert("Clique uma vez!")
    }
    else{
        alert("Continue clicando!")
    }
}
var resposta
do{
    resposta==confirm("Deseja continuar?")
}while(resposta==true)