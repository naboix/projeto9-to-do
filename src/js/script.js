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

//FUNCAO QUE ADICIONA A TAREFA

function adcionarTarefa(){
    let linhas =document.getElementById("task")

    if (validaCampo()){
        alert ("Preencha o campo com a tarefa")
    } else{
        //ADD AS TAREFAS
        tarefas.push (linhas.value);
        //PASSANDO PARA A PROXIMA LINHA VAZIA
        linhas.value="";
        //CHAMANO A FUNCAO QUE VAI MOSTRAR TODAS AS TAREFAS
        listarTarefas();
    }
    document.getElementById("tasks").focus();
}


//FUNCAO LISTAR TAREFAS

function listarTarefas(){
    let valor="";
    for(let i=0; i<tarefas.length;i++){
        valor += tarefas[i] +"<br>";
    }
    document.getElementById("lista").innerHTML =valor;
}