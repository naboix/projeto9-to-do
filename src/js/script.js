//DECLARANDO A VARIAVEL

let tarefa = [];


//FUNCAO QUE VALIDA O PREENCHIMENTO DO CAMPO CASO ESTEJA VAZIO

Function validaCampo()
{
    let valida=false;
    if(document.getElementById("task").value == "")
    valida = true;
    return valida
}