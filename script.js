function atualizarRelogio() {
  const agora = new date();

  let horas = agora.getHours().toString().padStart(2, '0');
  let minutos = agora.getMinutes().toString().padStart(2, '0');
  let segundos = agora.getSeconds().toString().padStart(2, '0');

  const horaAtual = '${horas}:${minutos}:${segundos}';

  document.getElementbyID('clock').textcontent = horaAtual;
}

// Atualiza imediatamente e depois a cada segundo 
atualizarrelogio();
setInterval (atualizarRelogio, 1000);
