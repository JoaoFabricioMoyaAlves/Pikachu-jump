const pikachu = document.querySelector('.pikachu');
const fantasma = document.querySelector('.fantasma');
const cova = document.querySelector('.cova');


 
const jump = () =>{
    pikachu.classList.add('jump');
    setTimeout(()=>{
    pikachu.classList.remove('jump');
    },800 );
}

const loop = setInterval(()=> {
    console.log('loop')

    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px','');
    const fantasmaPosition = fantasma.offsetLeft;
    console.log(pikachuPosition);

     if(fantasmaPosition <= 120 && fantasmaPosition > 0 && pikachuPosition < 80){
        fantasma.style.animation = 'none';
        fantasma.style.left=`${fantasmaPosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.bottom =`${pikachuPosition}px`;
        cova.style.left=`${pikachuPosition}px`;
        cova.style.display = 'block';
        pikachu.querySelector('img').src = 'assets/over.png';

     
        clearInterval(loop);

     }



})



document.addEventListener('keydown',jump);
document.addEventListener('click',jump);