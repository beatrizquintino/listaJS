function balancoFinanceiro (){
    let contagemMes = 1;
    let ganhoBruto = 0; 
    let gastoMes = 0;
    let saldoFinanceiro = 0;

    while (contagemMes <= 12) {
        ganhoBruto += parseFloat(prompt("Informe o ganho bruto do mês "+contagemMes)); //ganhoBruto = ganhoBruto + novo valor
        gastoMes += parseFloat(prompt("Informe o gasto total do mês "+contagemMes));
        contagemMes++
    }

    alert("O ganho bruto anual da empresa foi R$"+ganhoBruto);
    alert("O gasto anual da empresa foi R$"+gastoMes);
    
    saldoFinanceiro = ganhoBruto - gastoMes;

    if (saldoFinanceiro > 0){
        alert("O saldo financeiro foi positivo! No valor de R$"+saldoFinanceiro);
    }

    if(saldoFinanceiro < 0){
        alert("O saldo financeiro foi negativo! No valor de R$"+saldoFinanceiro);
    }

    if(saldoFinanceiro = 0){
        alert("O saldo fincanceiro ficou zerado")
    }
}