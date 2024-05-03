//DECLARANDO A VARIAVEL

let tarefa = [];


//FUNCAO QUE VALIDA O PREENCHIMENTO DO CAMPO CASO ESTEJA VAZIO

function validaCampo()
{
    let valida=false;
    if(document.getElementById("task").value == "")
    valida = true;
    return valida
}

//FUNCAO QUE ADICIONA A TAREFA

function adicionarTarefa(){
    let linhas =document.getElementById("task")

    if (validaCampo()){
        alert ("Preencha o campo com a tarefa")
    } else{
        //ADD AS TAREFAS
        tarefa.push (linhas.value);
        //PASSANDO PARA A PROXIMA LINHA VAZIA
        linhas.value="";
        //CHAMANO A FUNCAO QUE VAI MOSTRAR TODAS AS TAREFAS
        listarTarefas();
    }
    document.getElementById("task").focus();
}


//FUNCAO LISTAR TAREFAS

function listarTarefas(){
    let valor="";
    for(let i=0; i<tarefa.length;i++){
        valor += tarefa[i] +"<br>";
    }
    document.getElementById("lista").innerHTML =valor;
}

//FUNCAO REMOVER TAREFA

function removerTarefa(){
    //POP - METODO QUE REMOVE A ULTIMA LINHA
    tarefa.pop ();
    listarTarefas();
}