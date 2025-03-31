function vogalConsoante() {
    let i = 0;
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let eh_vogal = false;
    var letra = prompt("Informe uma letra")


    for (i = 0; i < 5; i++) {
        if (letra.toLowerCase() == vogais[i]) {
            eh_vogal = true;
        }
    }

    if (eh_vogal) {
        alert("É uma vogal")
    } else {
        alert("É uma consoante")
    }
}