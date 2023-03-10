

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

let botonAdivinar = document.getElementById("adivinar");
botonAdivinar.addEventListener("click", function() {
    var numeroIngresado = document.getElementById("inputNumber").value;
    if (numeroIngresado == numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "¡Adivinaste!";
    } else if (numeroIngresado < numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "El número es mayor";
    } else {
        document.getElementById("resultado").innerHTML = "El número es menor";
    }
})