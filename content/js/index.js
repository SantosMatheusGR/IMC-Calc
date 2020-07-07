const btnCalcular = document.querySelector('button');
const resultado = document.querySelector('.resultado');

btnCalcular.onclick = function(event){
    event.preventDefault();
    resultado.innerHTML = "";

    var data = {
        peso : document.querySelector('.peso').value,
        altura : document.querySelector('.altura').value
    }

    if(data.peso == 0 || data.altura == 0)
        return;

    validarInput(data);
}

function validarInput(data){
    let pesoIsValid = data.peso >= 25 && data.peso <= 140;
    let alturaIsValid = data.altura >= 1 && data.altura <= 2.5;

    let erros = [];

    if (!pesoIsValid)
        erros.push("Peso inválido, o valor deve ser entre 25 e 140 Kg.");
        
    if(!alturaIsValid)
        erros.push("Altura inválida, o valor deve ser entre 1 e 2.5 m.");

    if (erros.length > 0){
        let ul = document.createElement('ul');

        erros.forEach(erro => {
            let li = document.createElement('li');
            li.textContent = erro;
            ul.appendChild(li);
        });

        resultado.appendChild(ul);
        return;
    }

    calculaImc(data);
}

function calculaImc(data){
    var imc = data.peso / (data.altura * data.altura);

    var posicaoTabela = verificarPosicaoTabelaImc(imc);

    resultado.innerHTML = (`<ul>
                            <li>O seu IMC é de <strong>${imc.toFixed(2)}</strong>.</li>
                            <li>Seu IMC se encontra na posição <strong>${posicaoTabela}</strong> na tabela de condição.</li>
                        </ul>`);
}

function verificarPosicaoTabelaImc(imc){
    if(imc < 18.5){
        return "Abaixo Do Peso";
    }
    else if(imc >= 18.5 && imc <= 24.99){
        return "Peso Ideal";
    }
    else if(imc >= 25 && imc <= 29.99){
        return "Sobrepeso";
    }
    else if(imc >= 30 && imc <= 34.99){
        return "Obesidade Grau 1";
    }
    else if(imc >= 35 && imc <= 39.99){
        return "Obesidade Grau 2";
    }
    else if(imc > 40){
        return "Obesidade Grau 3";
    }
}