const verde = document.querySelectorAll('.labels');
verde.forEach((elemento, index) =>{
    elemento.addEventListener('click', () =>{
        if(index === 0){
            elemento.classList.add('verde')
            verde[1].classList.remove('verde')

        }else if(index === 1){
            elemento.classList.add('verde')
            verde[0].classList.remove('verde')
        }
    })
})

console.log(verde)