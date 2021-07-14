function gerarDado1() {
    let dado1 = Math.floor(Math.random() * 6 + 1);  
    console.log(dado1, 'Dado1'); 
    return dado1
}

function gerarDado2(){
    let dado2 = Math.floor(Math.random() * 6 + 1);
    console.log(dado2, 'Dado2'); 
    return dado2
}

function somarDados(){
    return gerarDado1() + gerarDado2()
}
console.log(somarDados())

// function rolarDados(){
//     let count = [0,0,0,0,0,0,0,0,0,0,0];
//     // for(let i = 0; i < 1000; i++){
//     //     for (let j = 0; j < 1000; j++){
//     //         count += count[i];
//     //     }
//     // }
//     return soma
// }
// console.log(rolarDados())
