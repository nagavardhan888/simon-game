let gameseq =[];
let userseq =[];
let started  = false;
let level =0;
let h2 = document.querySelector("h2")
let btns  = ["yellow","red","purple","green"]


document.addEventListener("keypress",function(){
   if(started == false){
    console.log("game startd")
    started = true
    levelup();
   }
})   
function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");

  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
 

function levelup() {
  userseq=[]
  level++;
  h2.innerText = `Level ${level}`;

  let randIndex = Math.floor(Math.random() * btns.length);
  let randcolor = btns[randIndex];
  let randbtn = document.querySelector(`.${randcolor}`)
  gameseq.push(randcolor)
  gameFlash(randbtn);
}
function checkAns(idx){

  if(userseq[idx]===gameseq[idx]){
  if(userseq.length === gameseq.length){
    setTimeout(levelup,1000)
  }
}else{
    h2.innerHTML = `Game Over! your score was<b>${level}</b><br>press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function()  {
      document.querySelector("body").style.backgroundColor="white"
    }, 150);
    reset();
  }
}
function btnpress() {
 let btn = this;
 userFlash(btn)
 userColor = btn.getAttribute("id")
 userseq.push(userColor)
 checkAns(userseq.length-1)
}
let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
 btn.addEventListener("click",btnpress)
}
function reset(){
  started == false;
  gameseq= [];
  userseq= [];
  level = 0;
}
