function calcularImc (){
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // console.log('nome') testar
    if (nome === '' || altura === '' || peso === ''){ 
        resultado.textContent = 'Preencha todos os campos!';  
    }else {
        const imc = peso / (altura * altura);
        let mensagem = '';

        if (imc < 18.5) {
            mensagem = 'e você está abaixo do peso';
        } else if (imc < 25){
            mensagem = 'você está no peso ideal';
        } else if (imc < 30){
            mensagem = 'levemente acima do peso';
        } else if (imc < 35){
            mensagem = 'com obesidade grau I';
        } else if (imc < 40){
            mensagem = 'com obesidade grau II';
        } else {
            mensagem = 'com obesidade grau III. Cuidado!!';

        }
        
        resultado.innerHTML = `${nome} seu imc é: ${imc.toFixed(2)} ${mensagem}`;
    }

}

document.getElementById('calcular').addEventListener('click',calcularImc);