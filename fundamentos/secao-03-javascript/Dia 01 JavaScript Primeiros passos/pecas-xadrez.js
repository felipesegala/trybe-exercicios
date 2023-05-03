let chessPiece = 'PEao';

switch (chessPiece.toLowerCase()) {
    case 'peao':
        console.log('Peão -> Uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas');
        break
    case 'cavalo':
        console.log('Cavalo -> Duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante');
        break
    case 'torre':
        console.log("Torre -> Quantas casas quiser na vertical e horizontal");
        break
    case 'rainha':
        console.log("Rainha -> Quantas casas quiser em qualquer direção");
        break
    case 'rei':
        console.log("Rei -> Uma casa em qualquer direção");
        break
    case 'bispo':
        console.log('Bispo -> Diagonal');
        break
    default:
        console.log('Erro, peça inesistente');
}