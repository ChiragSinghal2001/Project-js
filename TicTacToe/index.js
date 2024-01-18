console.log("Jai Shree Ram");

let music=new Audio("music.mp3")
let gameOver=new Audio("gameOver.mp3")
let audioTurn = new Audio("ting.mp3")
let isGameOver=false;
let turn="X"

const changeTurn = ()=>{
    return turn === "X"? "0" : "X"
}

const checkWin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    // console.log(boxtext[e[0]]);
      let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8] ,
        [0,3,6] ,
        [1,4,7] ,
        [2,5,8] ,
        [0,4,8] ,
        [2,4,6],
          ]
          wins.forEach(e=>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            console.log(boxtext[e[0]]);
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
                isGameOver = true
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector("img").style.width= "20vw";
            }
          })
}

//Game Logic
let box=document.querySelectorAll(".singlebox");
console.log(box);
Array.from(box).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    console.log("vvb");
    element.addEventListener('click',()=>{
    if(boxtext.innerText === '')
    {
        boxtext.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
        if(!isGameOver){
            document.querySelector(".info").innerHTML = `turn for ${turn}`;
        }
    }
})
})


//reset button
let reset = document.querySelector("#reset");
reset.addEventListener('click',()=>{
    let boxes=document.querySelectorAll(".singlebox")
    Array.from(boxes).forEach((element)=>
    {
        let boxtext=element.querySelector(".boxtext");
        boxtext.innerText = "";
    })
    isGameOver=false
    document.querySelector(".info").innerHTML = `turn for X `;
    document.querySelector("img").style.width= "0";
    
})

    