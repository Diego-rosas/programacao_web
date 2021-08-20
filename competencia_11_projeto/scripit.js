function validaForm() {
    var x = document.forms["formulario"]["nome"].value;
    if (x == "") {
        alert("O nome precisa ser preenchido!");
        return false;
    }
    var y = document.forms["formulario"]["cpf"].value;
    if (y == "") {
        alert("O cpf precisa ser preenchido!");
        return false;
    }
    var z = document.forms["formulario"]["email"].value;
    if (z == "") {
        alert("O email precisa ser preenchido!");
        return false;
    }
    var av1 = document.forms["formulario"]["av1"].value;
    if (av1 == "") {
        alert("A nota da AV1 precisa ser preenchida!");
        return false;
    }
    var av2 = document.forms["formulario"]["av2"].value;
    if (av2 == "") {
        alert("A nota da AV2 precisa ser preenchida!");
        return false;
    }
    var media = document.forms["formulario"]["media"].value;
    if (media == "") {
        alert("A nota Média precisa ser preenchida!");
        return false;
    }
}