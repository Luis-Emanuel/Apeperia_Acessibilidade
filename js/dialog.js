// Variáveis
var conteudoForaDialog = document.querySelector('#conteudoForaDialog');
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

btnAbreDialog.style.display = 'block';

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus();
  conteudoForaDialog.inert = true;
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');   
  conteudoForaDialog.inert = false;
  btnAbreDialog.focus();

}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);

dialogOverlay.addEventListener('click', fechandoDialog)

document.addEventListener('keyup', function(evento){
  if(evento.keyCode == 27){
    fechandoDialog()
  }
})