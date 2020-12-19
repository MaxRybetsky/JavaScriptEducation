let answers = [];
let questions = [
    'What is your name?',
    'What is your surname?',
    'How old are you?'
];

for(let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i], '');
}

document.write(answers);