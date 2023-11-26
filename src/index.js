let elo = "";

function defineRank (pontuacao) {
  if (pontuacao < 10) {
    elo = "Ferro";
  } else if (pontuacao >= 11 && pontuacao <= 20) {
    elo = "Bronze";
  } else if (pontuacao >= 21 && pontuacao <= 50) {
    elo = "Prata";
  } else if (pontuacao >= 51 && pontuacao <= 80) {
    elo = "Ouro";
  } else if (pontuacao >= 81 && pontuacao <= 90) {
    elo = "Diamante";
  } else if (pontuacao >= 91 && pontuacao <= 100) {
    elo = "Lendário";
  } else if (pontuacao > 100) {
    elo = "Imortal";
  } else {
    return undefined;
  }
  
  return elo;
}

function mostrarRank (vitorias, derrotas) {
  let pontuacao = vitorias - derrotas;
  
  console.log("O Herói tem de saldo de "+pontuacao+" está no nível de "+defineRank(pontuacao));
}

mostrarRank(111,10);