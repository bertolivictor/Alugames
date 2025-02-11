function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagemBotao = gameClicado.querySelector('.dashboard__item__img');
    let Botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagemBotao.classList.contains('dashboard__item__img--rented')){
        imagemBotao.classList.remove('dashboard__item__img--rented');
        Botao.classList.remove('dashboard__item__button--return');
        Botao.textContent = 'Alugar';
    }   else {
        imagemBotao.classList.add('dashboard__item__img--rented');
        Botao.classList.add('dashboard__item__button--return');
        Botao.textContent = 'Devolver';
    }
}    