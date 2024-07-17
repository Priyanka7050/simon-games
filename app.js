// let gameSeq=[];
// let userSeq=[];

// let btns=["yellow","red","purple","green"];


// let started =false;
// let level =0;


// let h2= document.querySelector("h2");

// document.addEventListener("keypress", function () {
//    if (started==false){
//     console.log("game is started");
//     started =true;

//     levelUp();
//    }
// });

//  function btnFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function() {

//       btn.classList.remove("flash");

        

//     },1000);

//  }

// function levelUp(){
//     level++;
//     h2.innerText=`Level ${level}`;
//     let randIdx =Math.floor(Math.random()*3);
//     let randColor =btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     console.log(randIdx);
//     console.log(randColor);
//     console.log(randBtn); console.log(randIdx);

//     btnFlash(randBtn);
// }




// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//     if (!started) {
//         console.log("game is started");
//         started = true;
//         levelUp();
//     }
// });

// function btnFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function levelUp() {
//     level++;
//     h2.innerText = `Level ${level}`;
//     let randIdx = Math.floor(Math.random() * btns.length); // Use the length of the btns array
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     console.log(randIdx);
//     console.log(randColor);
//     console.log(randBtn);

//     btnFlash(randBtn);
// }

// function checkAns(idx){
//    // console.log("curr level :",level);

//    let idx= level-1;

//    if (userSeq[idx] === gameSeq[idx]){

//       if (userSeq.length == gameSeq.length){
//          levelUp();
//       }

      
//       // console.log("same value");

//    }else{
//       h2.innerText = `Game over! press any key to start.`;
//    }
// }

// function btnPress () {
//    console.log(this);
//    let btn =this;
//    userFlash(btn);

//    userColor = btn.getAttribute("id");
//    userSeq.push(userColor);

//    checkAns(userSeq.length-1);


// }

// let allBtns =document.querySelector(".btn");
// for (btn of allBtns) {
//    btn.addEventListener("click",btnPress);
// }



let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * btns.length); // Use the length of the btns array
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    btnFlash(randBtn);
}

function checkAns(userIdx) {
    if (userSeq[userIdx] === gameSeq[userIdx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(() => {
                levelUp();
            }, 1000); // Add a delay before the next level
        }
    } else {
        h2.innerText = `Game over! Press any key to start.`;
        reset(); // Add a function to reset the game
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn); // Assuming userFlash is defined elsewhere

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn"); // Use querySelectorAll
for (let btn of allBtns) { // Declare btn with let
    btn.addEventListener("click", btnPress);
}

function userFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function resetGame() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}

