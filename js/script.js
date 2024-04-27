   const Mario = document.querySelector('.Mario');
   const Pipe = document.querySelector('.Pipe');
   const Clouds = document.querySelector('.Clouds');
  
   const Jump = () => {
    Mario.classList.add('Jump');

    setTimeout(() => {
      
        Mario.classList.remove('Jump');
    
    }, 500);

}
   const loop = setInterval(() => {


      const Cloudsposition = Clouds.offsetLeft
      const Pipeposition = Pipe.offsetLeft 
      const MarioPosition = +window.getComputedStyle(Mario).bottom.replace('px', ' ');

      console.log(MarioPosition);

      if (Pipeposition <= 120 && Pipeposition > 0 && MarioPosition < 80) {

   
        Mario.src = './Images/Death.webp'
        Mario.style.width = '70px'
        Mario.style.marginLeft = '50px'
        
        Pipe.style.animation = 'none';
        Pipe.style.left = `${Pipeposition}px`;
       
        Mario.style.animation = 'none';
        Mario.style.bottom = `${MarioPosition}px`;
        
        Clouds.style.animation = '';
        Clouds.style.left = `${Cloudsposition}`;
      } 
   }, 10)

    document.addEventListener('keydown', Jump);
 
