function mensagem(nome,hora) {


    if (hora > 0 && hora <= 12){
        console.log("Bom dia " + nome)
    } else if (hora > 12 && hora < 17){
        console.log("Boa tarde " + nome)
    }else if (hora > 17 && hora <= 23){
        console.log("Boa noite " + nome)
    }else{
        console.log("Quantas horas tem seu dia " + nome + "??????")
    }
}

mensagem("gustavo", 15);