//velocidade maxima de 80 km/h
//a cada 5km/h acima da velocidade maxima 1 ponto na cnh
//caso passe de 12 pontos --> "carteira suspendida"

verificarVelocidade(180);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 80;
    const kmPorPontos = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPontos));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('pontos', pontos);
    }
}