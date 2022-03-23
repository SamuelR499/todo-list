const listaPai = document.createElement('ol');
listaPai.id = 'lista-tarefas';

document.body.appendChild(listaPai);

const btn = document.createElement('button');
btn.id = 'criar-tarefa'
document.body.appendChild(btn);
btn.innerText = 'New Achievement'

let = textBox = document.getElementById('texto-tarefa');
// console.log(textBox);
function adicionaTarefa() {
    const tarefa = document.createElement('li');
    tarefa.innerText = textBox.value;
    listaPai.appendChild(tarefa);
    textBox.value = '';
}

btn.addEventListener('click', adicionaTarefa);


function newselect(evnt) {
    const tarefa = document.querySelector('.selected');

    if (tarefa !== null) {
        tarefa.classList.remove('selected');
    }
    evnt.target.classList.add('selected');
}


listaPai.addEventListener('click', newselect);

function finalizado(evnt) {

    evnt.target.classList.toggle('completed');
    // console.log('double click');
    // if(evnt.target.classList.contains('completed') ){
    //     evnt.target.classList.remove('completed');
    // }else{
    //     evnt.target.classList.add('completed');
    // }
}

listaPai.addEventListener('dblclick', finalizado);
