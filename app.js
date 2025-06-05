const question= [{
    'que': 'What is the capital of France?',
    'a': 'Berlin',
    'b': 'Madrid',  
    'c': 'Paris',
    'd': 'Rome',
    'correct': 'c',
},
{    'que': 'What is the largest planet in our solar system?',
    'a': 'Earth',
    'b': 'Jupiter',
    'c': 'Saturn',
    'd': 'Mars',
    'correct': 'b',
},
{    'que': 'What is the chemical symbol for water?',
    'a': 'H2O',
    'b': 'CO2',
    'c': 'O2',
    'd': 'NaCl',
    'correct': 'a',
}
]
let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const quesbox = document.getElementById('quebox');
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    rese();
    const data = question[index];
    quesbox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;// Accessing the next sibling of the input element to set the label text
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitquiz = () => {
    const data = question[index];
    const answer= getans();
    if(answer === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getans = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {    
            answer= input.value;
            
        }
    })
    return answer;
}

const rese = () => {
    optionInputs.forEach((input) => {
        input.checked = false; // Reset the checked state of each input
    })
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <h3>Thank you for playing the quiz!</h3>
    <h2>${right} / ${total} are correct</h2>
    <button class="btn" onclick="location.reload()">Play Again</button>
    `;
}
loadQuestion();
