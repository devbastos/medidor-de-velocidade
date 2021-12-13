//velocidade maxima de 80 km/h
//a cada 5km/h acima da velocidade maxima 1 ponto na cnh
//caso passe de 12 pontos --> "carteira suspendida"

verificarVelocidade(180);

function verificarVelocidade(velocidade) {
    if (velocidade <= 80)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - 80) / 5));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('pontos', pontos);
    }
}