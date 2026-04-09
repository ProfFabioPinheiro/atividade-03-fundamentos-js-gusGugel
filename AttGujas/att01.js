function calcularDesconto (p,d){
    const x = d/100;
    const descontoTotal = x*p;
    const valorFinal = p-descontoTotal;

    console.log("O valor do produto é: " + p)
    console.log("O valor do desconto é: " + descontoTotal)
    console.log("O valor a ser pago é: " + valorFinal)
}

calcularDesconto(50,20);