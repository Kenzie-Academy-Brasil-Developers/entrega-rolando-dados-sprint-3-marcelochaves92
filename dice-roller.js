const container = document.getElementById('container');
const grafico = document.getElementById('grafico');

function showResults(valor){
    let newElement = document.createElement('div');
    newElement.innerText = valor;
    container.appendChild(newElement);
}

function showGraphic(valor){
    let total = 1000;
    let newElement2 = document.createElement('div');
    newElement2.className = "bar";        
    newElement2.style.height = (valor * 100) / total + "%";
    newElement2.innerText = valor;
    grafico.appendChild(newElement2);
}


function gerarDado1() {
    let dado1 = Math.floor(Math.random() * 6 + 1);  
    return dado1
}

function gerarDado2(){
    let dado2 = Math.floor(Math.random() * 6 + 1);
    return dado2
}

function somarDados(){
    return gerarDado1() + gerarDado2()
}

let count = [0,0,0,0,0,0,0,0,0,0,0];

function rolarDados(){
    for(let i = 0; i < 1000; i++){
        count[somarDados() - 2] += 1
    }
}
rolarDados()
showResults(count)

for(let i=0; i < count.length; i++){
    showGraphic(count[i]);
}