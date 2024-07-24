function primeiroCampo() {
    const campo = document.querySelector('.campo');
    const span = document.querySelector('.span-1');


    campo.addEventListener('input', () => {
        if (!campo.value) {

            campo.classList.remove('campo-verde');
            span.style = "background-color: hsl(202, 86%, 94%)"

        } else {
            campo.classList.add('campo-verde');
            span.style = "background-color: #d8db2f";
        }
    })
}
primeiroCampo()

function calculo() {
    const mensagem = document.querySelectorAll('.erro');
    const campos = document.querySelectorAll('input[type="number"]');
    const spans = document.querySelectorAll('.spans');
    const simbolos = document.querySelectorAll('.simbolos');
    const botao = document.querySelector('.calcular');

    botao.addEventListener('click', (event) => {
        event.preventDefault();

        let todosValidos = true;

        campos.forEach((elemento, index) => {
            if (!elemento.value) {
                mensagem[index].style.visibility = "visible";
                campos[index].style.borderColor = "red";
                spans[index].style.backgroundColor = "red";
                simbolos[index].style.color = "white";
                todosValidos = false;
            } else {
                mensagem[index].style.visibility = "hidden";
                campos[index].style.borderColor = "";
                spans[index].style.backgroundColor = "";
                simbolos[index].style.color = "";
            }
        });

        const radioCheck = document.querySelectorAll('.check'); /*input radios*/
        const ultimaMensagem = document.querySelector('.erro-2');

        let algumMarcado = false;

        radioCheck.forEach((el) => {
            if (el.checked) {
                algumMarcado = true;
            }
        });

        const valorInvestido = document.querySelector('.campo');
        const tempoInvestido = document.querySelector('.cam-2');
        const taxaDeJuros = document.querySelector('.cam-3');
        const valorTotal = document.querySelector('.sub-valor');
        const valorMensal = document.querySelector('.valor');
        const caixaMensagem = document.querySelector('.painel-principal');
        const resultado = document.querySelector('.painel-display');

        let a = parseFloat(valorInvestido.value);
        let b = parseFloat(tempoInvestido.value);
        let c = parseFloat(taxaDeJuros.value) / 100;
        let n = c /12;

        if (!algumMarcado) {
            ultimaMensagem.style.visibility = "visible";
            todosValidos = false;
        } else {
            ultimaMensagem.style.visibility = "hidden";
        }

        if (todosValidos && !isNaN(a) && a > 0 && !isNaN(b) && b > 0 && !isNaN(c) && c > 0) {
            let x = a * Math.pow((1 + c), b);
            let y = a * n;
            valorTotal.innerHTML = `$ ${x.toFixed(1)}`;
            valorTotal.style.color = "white";
            valorMensal.innerHTML = `$ ${y.toFixed(1)}`
            valorMensal.style.color = 'hsl(61, 70%, 52%)'
            caixaMensagem.classList.add('invisivel');
            resultado.classList.remove('invisivel');


        } else {
            valorTotal.innerHTML = `error`;
            valorMensal.innerHTML = `error`
            valorTotal.style.color = "red";
            valorMensal.style.color = 'red';
            caixaMensagem.classList.add('invisivel');
            resultado.classList.remove('invisivel');
        }
    });
}

calculo();


calculo()

function tipos() {
    const verde = document.querySelectorAll('.labels');
    const legenda = document.querySelectorAll('.legenda');
    const radioCheck = document.querySelectorAll('.check')
    legenda.forEach((elemento, index) => {
        elemento.addEventListener('click', () => {
            // Remove a classe 'verde' de todos os elementos
            verde.forEach(el => el.classList.remove('verde'));
            // Adiciona a classe 'verde' ao elemento correspondente
            verde[index].classList.add('verde');

        });
    });

    radioCheck.forEach((elemento, index) => {
        elemento.addEventListener('click', () => {
            verde.forEach(el => el.classList.remove('verde'));
            // Adiciona a classe 'verde' ao elemento correspondente
            verde[index].classList.add('verde');
        })
    })
}
// Chama a função para adicionar os listeners
tipos();



