let buttons = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset")
let msg = document.querySelector(".wmsg");
let final = document.querySelector(".message");
let title = document.querySelector(".title_message");
let turnX = true;

const winning_patterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const disablebuttons = () =>{
   for(let btns of buttons){
      btns.disabled = true;
   }
}

const enablebuttons = () =>{
   for(let btns of buttons){
      btns.innerText = "";
      btns.disabled = false;
   }
}

const message = (winnerp)=>{
   msg.classList.remove("hide");
   final.innerText = `Congratulations , Winner Is Player ${winnerp} `;

}
 
resetbtn.addEventListener("click" , () =>{
   turnX = true;
   enablebuttons();
   msg.classList.add("hide");
   resetbtn.classList.add("hide");

});   
buttons.forEach((box) => {
   box.addEventListener("click", () => {
      if (turnX) {
         box.innerText = "X";
         turnX = false;
         box.disabled = true;
         
      }   
      else {
         box.innerText = "O";
         turnX = true;
         box.disabled = true;
      }   
      checkwinner();
   })   
   
   }
);   
 

 function checkwinner (){
   for(let pattern of winning_patterns){
    let pos1 = buttons[pattern[0]].innerText;  
    let pos2 = buttons[pattern[1]].innerText;
    let pos3 = buttons[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos2!="" && pos3 !=""){
      if(pos1 === pos2){
         if(pos2 === pos3){
            if(pos1===pos3){
               disablebuttons();
               message(pos1);
               resetbtn.classList.remove("hide");
            }   
         }   
      }   
      
    }  
    
}    
}

title.addEventListener("mouseover" , ()=>{
    title.innerText = "Nishant Saini";
    
})

title.addEventListener("click" , ()=>{
   title.innerText = "Tic Tac Toe";
})


