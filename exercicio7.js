function picoleteria() {

    alert("Sabores:" + "\n" + "a. Chocolate" + "\n" + "b.Morango" + "\n" + "c.Creme" + "\n" + "d.Manga" + "\n" + "e.Melancia" + "\n" + "f.Vanilla Ice" + "\n" + "g.Céu Azul" + "\n" + "h.Brownie" + "\n" + "i.Hawaiano")


    const sabor = (prompt("Digite a letra do sabor desejado"))

    if (sabor == "a") {
        alert("Custa: R$1,50")
    } else if (sabor == "b") {
        alert("Custa: R$2,50")
    } else if (sabor == "c") {
        alert("Custa: R$2,50")
    } else if (sabor == "d") {
        alert("Custa: R$3,20")
    } else if (sabor == "e") {
        alert("Custa: R$3,40")
    } else if (sabor == "f") {
        alert("Custa: R$3,00")
    } else if (sabor == "g") {
        alert("Custa: R$3,60")
    } else if (sabor == "h") {
        alert("Custa: R$4,00")
    } else if (sabor == "i") {
        alert("Custa: R$5,00")
    }
}