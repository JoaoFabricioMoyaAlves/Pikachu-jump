const pikachu = document.querySelector('.pikachu');
const fantasma = document.querySelector('.fantasma');
const cova = document.querySelector('.cova');
const gameover = document.querySelector('.game-over');

let segundos = 0;

        // Função para atualizar e exibir o contador
        function atualizarContador() {
            document.getElementById('contador').innerText = segundos;
        }

        // Função que será chamada a cada segundo
        function incrementarSegundos() {
            segundos++;
            atualizarContador();
        }

        // Atualiza o contador a cada segundo (1000 milissegundos)
        const intervalo = setInterval(incrementarSegundos, 1000); 



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


        gameover.style.display = 'block'; 

        clearInterval(intervalo);
        clearInterval(loop);

     }



},10)

function recarregarPagina() {
 
    location.reload();
  }


document.addEventListener('keydown',jump);
document.addEventListener('click',jump);