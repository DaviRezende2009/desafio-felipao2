function saldoDeVitorias(vitorias, derrota){
    saldo = vitorias - derrota
    if (saldo <= 10){
        ranking = 'Ferro'
    }   
    else if (saldo > 10 && saldo >= 20){
        ranking = 'Bronze'
    }
    else if (saldo > 20 && saldo <= 50){
        ranking = 'Prata'
    }
    else if (saldo > 50 && saldo <= 80){
        ranking = 'Ouro'
    }
    else if (saldo > 80 && saldo <= 90){
        ranking = 'Diamante'
    }
    else if (saldo > 90 && saldo <= 100){
        ranking = 'Diamante'
    }
    else if (saldo > 101){
        ranking = 'Imortal'
    }
    console.log('O herói tem o saldo de '+ saldo +' está no ranking ' + ranking)
}
saldoDeVitorias(90,10)