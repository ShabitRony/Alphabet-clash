function hideElementById(element){
    const hide = document.getElementById(element);
    hide.classList.add('hidden');
}
function showElementById(element){
    const show = document.getElementById(element);  
    show.classList.remove('hidden');
}


function getARandomAlphabet(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split(['']);
    return (alphabets[Math.floor(Math.random() * alphabets.length)]);

    // const randomNumber = Math.random()*25;
    // const index = Math.round(randomNumber);
    // console.log(alphabets[index]);
}

    function setBackgroundColorById(element){
        const elementById = document.getElementById(element);
        elementById.classList.add('bg-orange-400');
    }

    function removeBackgroundColorById(element){
        const elementById = document.getElementById(element);
        elementById.classList.remove('bg-orange-400');
    }

    function getTextElementValue(element){
            const elementId =document.getElementById(element);
            const elementText = elementId.innerText;
            return parseFloat(elementText)
    }

    function updateScore(){
        const currentScore = document.getElementById('score');
        const scoreText = currentScore.innerText;
        const score = parseFloat(scoreText);
        console.log(score);

        const newScore = score +1;

       currentScore.innerText = newScore;

    // const score = document.getElementById('score');
    // const scoreText = score.innerText;
    // const newScore = parseFloat(scoreText)+1;
    // score.innerText = newScore;   
    }
    function minusLife(){
        const minusScore = document.getElementById('life');
        const scoreText = minusScore.innerText;
        const newScore = parseFloat(scoreText)-1;
        minusScore.innerText = newScore;
        if(newScore === 0){
            gameOver();
        }
    }

    function gameOver(){
        hideElementById('playground-section');
        showElementById('final-score')
    }