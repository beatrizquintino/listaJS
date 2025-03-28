function ordemDecrescente(){
    let valor = [];
    let contadora = 1;

    while(contadora <= 4){
        valor += parseFloat(prompt("Informe um número"));
        contadora++
    }

    array.sort(function(a, b){ return a > b; });
   }                                                          