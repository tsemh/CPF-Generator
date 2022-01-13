import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

function gerandoCPF() {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
};
gerandoCPF()


const buttonGera = document.getElementById('button-gera');

function geraOn() {
  return gerandoCPF();
}
geraOn();
buttonGera.addEventListener('click', geraOn);