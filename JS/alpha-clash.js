// function play(){{
//     const homeSection =document.getElementById('home')
//     homeSection.classList.add('hidden')
    
//     const playgroundSection = document.getElementById('playground-section')
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
    
// }}

function play(){
    hideElementById('home');
    showElementById('playground-section');
    hideElementById('final-score')
    setTextElementById('life',5)
    setTextElementById('score',0)
    setTextElementById('total-score',0)
    
    continueGame();
}

function continueGame(){
    const alphabet = getARandomAlphabet();
     const show =document.getElementById('show-alphabet');
     show.textContent = alphabet.toUpperCase();
    //  show.innerHTML = alphabet;
    // show.innerText = alphabet;

    setBackgroundColorById(alphabet)
}

function handlePressKey(event){
    const eventKey= event.key;
    if(eventKey ==='Escape'){
        gameOver();
    }
   const show = document.getElementById('show-alphabet')
   const showElement = show.innerText.toLowerCase();
   console.log(showElement);

   
   
 if(eventKey == showElement){
    console.log("You got the alphabet");
    const currentScore = getTextElementValue('score')
    const newScore = currentScore + 1;
    setTextElementById('score' , newScore)
    setTextElementById('total-score',newScore)
    removeBackgroundColorById(showElement);
    continueGame();
    
    // updateScore();
   

 
    
 }else{
    const updateLife = getTextElementValue('life');
    const newLife = updateLife - 1;
    setTextElementById('life',newLife);
    // console.log("You lost a life");
    // minusLife();
    if(newLife == 0){
        gameOver();
        setButton();
    }
 }

    
}
document.addEventListener('keyup',handlePressKey)


function gameOver(){
    hideElementById('playground-section');
    showElementById('final-score');  
}   
function setButton(){
    const currentAlphabet = getElementTextById('show-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
