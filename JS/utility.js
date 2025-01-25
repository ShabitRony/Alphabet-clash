function hideElementById(elementId){
    const hide = document.getElementById(elementId);
    hide.classList.add('hidden');
}
function showElementById(elementId){
    const show = document.getElementById(elementId);  
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

    function setBackgroundColorById(elementId){
        const elementById = document.getElementById(elementId);
        elementById.classList.add('bg-orange-400');
    }

    function removeBackgroundColorById(elementId){
        const element = document.getElementById(elementId);
        element.classList.remove('bg-orange-400');
    }

    function getTextElementValue(elementId){
            const elementById =document.getElementById(elementId);
            const elementText = elementById.innerText;
            return parseFloat(elementText)
    }

    // function updateScore(){
    //     const currentScore = document.getElementById('score');
    //     const scoreText = currentScore.innerText;
    //     const score = parseFloat(scoreText);
    //     console.log(score);

    //     const newScore = score +1;

    //    currentScore.innerText = newScore;

    // // const score = document.getElementById('score');
    // // const scoreText = score.innerText;
    // // const newScore = parseFloat(scoreText)+1;
    // // score.innerText = newScore;   
    // // }
    // function minusLife(){
    //     const minusScore = document.getElementById('life');
    //     const scoreText = minusScore.innerText;
    //     const newScore = parseFloat(scoreText)-1;
    //     minusScore.innerText = newScore;
    //     if(newScore === 0){
    //         gameOver();
    //     }
    // }

    function getTextElementValueById(elementId){
        const element = document.getElementById(elementId);
        const elementText = element.innerText;
        const value =  parseFloat(elementText);
        return value
    }
    function setTextElementById(elementId , value){
        const element = document.getElementById(elementId);
        element.innerText = value;
    }
    function getElementTextById(elementId){
        const element = document.getElementById(elementId);
        const elementText = element.innerText;
        return elementText;
    }

    

   