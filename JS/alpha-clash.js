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

   const show = document.getElementById('show-alphabet')
   const showElement = show.innerText.toLowerCase();
   console.log(showElement);
   
   
 if(eventKey == showElement){
    console.log("You got the alphabet");
   
    removeBackgroundColorById(showElement);
    continueGame();
    const currentScore = getTextElementValue('score')
    const newScore = currentScore+1;
    
    
 }else{
    console.log("You lost a life");
    minusLife();
    
 }

    
}
document.addEventListener('keyup',handlePressKey)

