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