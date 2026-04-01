let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newGameBtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
];
const resetGame=()=>{
  let turnO=true;
  enableBoxes();
  msgContainer.classList.remove("hide");
}
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    box.style.color=turnO?"red":"blue";
   if(turnO){
    box.innerText="O";
     box.style.color="red";
    turnO=false;
   }else{
    box.innerText="x";
     box.style.color="blue";
    turnO=true;
   }
    box.disabled=true;
    checkWinner();
   });
});
const disableBoxes=()=>{
for (let box of boxes){
  box.disabled=true;
}
};
const enableBoxes=()=>{
for (let box of boxes){
  box.disabled=false;
  box.innerText="";
}
};
const showWinner=(winner)=>{
      msg.innerText=`Congratulation,winner is${winner}`;
      msgContainer.classList.remove("hide");
      disableBoxes();
};
const checkWinner=()=>{
     for(let pattern of winPatterns){
       let post1val=boxes[pattern[0]].innerText;
       let post2val=boxes[pattern[1]].innerText;
       let post3val=boxes[pattern[2]].innerText;
        if(post1val!="" && post2val!="" && post3val!=""){
          if(post1val===post2val && post2val===post3val){
            console.log("winner",post1val);
            showWinner(post1val);
          }
        }
     }
};
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

