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
    
}