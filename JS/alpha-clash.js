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