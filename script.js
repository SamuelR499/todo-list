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
//buscar quem tem a clsse selected,
//se existi remover a classe desse elemento que tem selected
//adicionar ao elemento que acabe ide clicar 

listaPai.addEventListener('click', newselect);
