const listaPai = document.createElement('ol');
listaPai.id = 'lista-tarefas';

document.body.appendChild(listaPai);

const btn = document.getElementById('criar-tarefa');

const btnClear = document.createElement('button');
btnClear.id = 'apaga-tudo';
document.body.appendChild(btnClear);
btnClear.innerText = ' Clear ';

const btnFinlzd = document.createElement('button');
btnFinlzd.id = 'remover-finalizados';
document.body.appendChild(btnFinlzd);
btnFinlzd.innerText = ' Limpar finalizados ';

const textBox = document.getElementById('texto-tarefa');
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

function faxina() {
  listaPai.innerHTML = '';
}

btnClear.addEventListener('click', faxina);

function tchauFinalizados() {
  const concluidas = document.querySelectorAll('.completed');
  for (let i = 0; i < concluidas.length; i += 1) {
    concluidas[i].remove();
  }
}
btnFinlzd.addEventListener('click', tchauFinalizados);

// function save() {
// listaOrdenada = document.getElementById('lista-tarefas')
// }
