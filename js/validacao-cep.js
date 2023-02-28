var campoCep = document.querySelector('#cep ');

campoCep.oninvalid = function() {
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.setCustomValidity('OPS! Tem algo errado nesse campo!');
        this.parentNode.classList.add('contatoCampo--erro');
    }
}