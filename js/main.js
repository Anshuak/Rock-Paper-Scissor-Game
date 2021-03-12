const human_score = document.getElementById('human_points');
const tie = document.getElementById('tie');
const AI_score = document.getElementById("ai_points");
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor')
const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const round = document.getElementById('round');
const arrForAi = ['rock', 'paper', 'scissor'];

let score_human = +human_score.innerText;
let score_AI = +AI_score.innerText;
let tie_score = +tie.innerText;
let round_var = +round.innerText;

const changeAIimg = (AI_choose) => {
    if (AI_choose == 'rock')
        box2.innerHTML = '<i class="fas fa-hand-rock" id="rock_hand"></i>';
    else if (AI_choose == 'paper') {
        box2.innerHTML = '<i class="fas fa-hand-paper" id="paper_hand"></i>';
    } else box2.innerHTML = '<i class="fas fa-hand-scissors" id="scissors_hand"></i>';
    console.log(box2.innerHTML)
}




const result = (human_choose, AI_choose) => {
    if (human_choose == 'rock') {
        box1.innerHTML = '<i class="fas fa-hand-rock" id="rock_hand"></i>';
        if (AI_choose === 'rock') return 0;
        else if (AI_choose === 'paper') return -1;
        else return 1;
    } else if (human_choose == 'paper') {
        box1.innerHTML = '<i class="fas fa-hand-paper" id="paper_hand"></i>';
        if (AI_choose === 'paper') return 0;
        else if (AI_choose === 'scissor') return -1;
        else return 1;
    } else {
        box1.innerHTML = '<i class="fas fa-hand-scissors" id="scissors_hand"></i>';
        if (AI_choose === 'scissor') return 0;
        else if (AI_choose === 'rock') return -1;
        else return 1;
    }
}

const reset = () => {
    score_AI = score_human = 0;
    human_score.innerText = '0';
    tie.innerText = '0';
    tie_score = 0;
    AI_score.innerText = '0';
    round.innerText = '0';
    box1.innerHTML = '';
    box2.innerHTML = '';
}

const winner = () => {
    if (score_human === 10) {
        alert("GAME IS OVER - YOU WON");
        reset();
    } else if (score_AI === 10) {
        alert("GAME IS OVER - SORRY! YOU LOST")
        reset();
    }
}

const showResult = (value) => {
    AI_choose = arrForAi[Math.floor(Math.random() * 3)];
    human_choose = value;
    // console.log(result(human_choose, AI_choose));
    changeAIimg(AI_choose);
    const res = result(human_choose, AI_choose);
    if (res == 1) {
        score_human += 1;
        human_score.innerText = score_human;
    } else if (res == -1) {
        score_AI += 1;
        AI_score.innerText = score_AI;
    } else {
        tie_score += 1;
        tie.innerText = tie_score;
    }
    round_var += 1;
    round.innerText = round_var;
    console.log(`${human_choose} ${AI_choose}`);
    winner();
}