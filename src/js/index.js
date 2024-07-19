function primeiroCampo(){
    const campo = document.querySelector('.campo');
    const span = document.querySelector('.span-1');
    
    
    campo.addEventListener('input', () =>{
        if(!campo.value){

            campo.classList.remove('campo-verde');
            span.style ="background-color: hsl(202, 86%, 94%)"
            
        }else{
            campo.classList.add('campo-verde');
            span.style ="background-color: #d8db2f";
        }
    })
}
primeiroCampo()

function erro() {
    const mensagem = document.querySelectorAll('.erro');
    const campos = document.querySelectorAll('input[type="number"]');
    const spans = document.querySelectorAll('.spans');
    const simbolos = document.querySelectorAll('.simbolos');
    const botao = document.querySelector('.calcular');

    botao.addEventListener('click', (event) =>{
        event.preventDefault();

        campos.forEach((elemento, index) =>{
            if(!elemento.value){
                mensagem[index].style.visibility = "visible";
                campos[index].style.borderColor = "red";
                spans[index].style.backgroundColor = "red";
                simbolos[index].style.color = "white";
            }else{
                mensagem[index].style.visibility = "hidden";
                campos[index].style.borderColor = "";
                spans[index].style.backgroundColor = "";
                simbolos[index].style.color = "";
            }
        })

        
        const radioCheck = document.querySelectorAll('.check'); /*input radios*/ 
        const ultimaMensagem = document.querySelector('.erro-2')

        let algumMarcado = false;

        radioCheck.forEach((el) => {
            if (el.checked) {
                algumMarcado = true;
            }
        });
    
        if (!algumMarcado) {
            ultimaMensagem.style.visibility = "visible";
        } else {
            ultimaMensagem.style.visibility = "hidden";
        }
        
    })
    console.log(simbolos);
}

erro()

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

