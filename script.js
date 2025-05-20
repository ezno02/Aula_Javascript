//mostrando alerta ao usuaria
// alert("Você está programando em JS")

function terra(){
    let bloco = document.getElementById("bloco")
    // bloco.style.backgroundColor = "brown"
    bloco.style.backgroundImage = "url(https://pm1.aminoapps.com/6660/c543e243e54d1d816b982641c15f36335deb3e46_hq.jpg)"
    
    bloco.style.transitionDuration = "500ms"
    bloco.style.scale = "0.3"
    setTimeout(() => {
        bloco.style.scale = "1"
    }, 500);
}

function pedra(){
    bloco.style.backgroundImage = "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN9O786DZXU3-xr3tyHvazkrwV4oogGXj9jbG7rkaVEYEWwATrNUSrjod8wRHGtPbBIp2RLBa1na93W5xBhGCztn4z2JvOYQX4EfIhYVPRNIdwiWPeEgU408M5IW8FR34MURPoNO0Om3Ca/s1600/pedra.png)"

    bloco.style.transform = "translateX(500px)"
    setTimeout(() => {
        bloco.style.transform = "translateX(0px)"
    }, 1000);
}

function lava(){
    bloco.style.backgroundImage = "url(https://i.pinimg.com/564x/2a/3d/0b/2a3d0bc9737563d9b3f1d01181fc5dbd.jpg)"

    bloco.style.transform = "translateX(-500px)"
    setTimeout(() => {
        bloco.style.transform = "translateX(0px)"
    }, 1000);
}

function limpar(){

    
    bloco.style.backgroundColor = "black"
    bloco.style.backgroundImage = "none"

    setTimeout(() => {
        bloco.style.backgroundImage = "none"
    }, 1000);
    setTimeout(() => {
        bloco.style.backgroundColor = "white"
    }, 1000);
}

//executanto fuction terra
//terra()
function boanoite(){
    let nome = document.getElementById("nome").value
    let texto = document.getElementById("texto")    

    texto.innerHTML = "Boa noite " + nome
}
