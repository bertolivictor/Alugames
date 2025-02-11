let jogosAlugados = 0;

function contadorLocacoes() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagemBotao = gameClicado.querySelector('.dashboard__item__img');
    let Botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagemBotao.classList.contains('dashboard__item__img--rented')){
        imagemBotao.classList.remove('dashboard__item__img--rented');
        Botao.classList.remove('dashboard__item__button--return');
        Botao.textContent = 'Alugar';
        alert('Por favor, confirme se o jogo a ser devolvido está correto!');
        jogosAlugados --;
    }   else {
        imagemBotao.classList.add('dashboard__item__img--rented');
        Botao.classList.add('dashboard__item__button--return');
        Botao.textContent = 'Devolver';
        jogosAlugados ++;
    }
    contadorLocacoes();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contadorLocacoes();
});
