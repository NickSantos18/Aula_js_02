function gerarPersonagem() {
    let nome = document.getElementById("nome").value;
    let classe = document.getElementById("classe").value;
    let quirk = document.getElementById("quirk").value;

    let frase;

    if (classe === "heroi") {
        frase = "O herói " + nome + " possui a individualidade " + quirk +
                " e luta para salvar o mundo!";
    } 
    else if (classe === "vilao") {
        frase = "O vilão " + nome + " usa a individualidade " + quirk +
                " para espalhar o caos!";
    } 
    else if (classe === "Estudante") {
        frase = "O Estudante da U.A " + nome + ", com a individualidade " + quirk +
                ", Vai superar altas aventuras.";
    } 
    else {
        frase = nome + " é um civil com a individualidade " + quirk +
                ", tentando viver normalmente.";
    }

    document.getElementById("resultado").innerText = frase;
}


