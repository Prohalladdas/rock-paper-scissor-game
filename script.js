let UserwinPoint = 0
let ComputerwinPoint = 0

let item = document.querySelectorAll(".items")
let MsgPrint = document.querySelector("#showresult")

let userpoint = document.querySelector(".userpoint")
let computerpoint = document.querySelector(".computerpoint")

function computerChoose() {
    let option = ["rock", "paper", "scissor"]
    let random = Math.floor(Math.random() * 3)
    return option[random]
}

let drawGame = () => {
    MsgPrint.innerText = `Game Draw`
    MsgPrint.style.backgroundColor= "orange"
    MsgPrint.style.color= "#000000"
    MsgPrint.style.fontWeight= "600"
}
function ShowWinner(userWIn, userChoose, computerselect) {
    if (userWIn) {
        UserwinPoint++;
        userpoint.innerText = UserwinPoint
        MsgPrint.innerText = `You Win , You Choose ${userChoose} beat computer ${computerselect}`
        MsgPrint.style.backgroundColor= "Green"
        MsgPrint.style.color= "#ffffff"
        MsgPrint.style.fontWeight= "600"
    } else {
        ComputerwinPoint++
        computerpoint.innerText = ComputerwinPoint;
        MsgPrint.innerText = `You Lost , Computer Choose ${computerselect} beat Your ${userChoose}`
        MsgPrint.style.backgroundColor= "red"
        MsgPrint.style.color= "#ffffff"
        MsgPrint.style.fontWeight= "600"
    }
}

function playGame(userChoose) {
    console.log("You Choose", userChoose);
    // 
    let computerselect = computerChoose();
    console.log("Computer Choose", computerselect);

    //Who won Game Rules
    if (userChoose === computerselect) {
        drawGame()
    } else {
        let userWIn = true;
        if (userChoose === "rock") {
            userWIn = computerselect === "paper" ? false : true;
            // console.log("You Won");
        } else if (userChoose === "paper") {
            userWIn = computerselect === "scissor" ? false : true;
            //  console.log("You Lost");
        } else {
            userWIn = computerselect === "rock" ? false : true;
        }
        ShowWinner(userWIn, userChoose, computerselect)
    }
}

item.forEach((items) => {
    items.addEventListener("click", function () {
        let userChoose = items.getAttribute("id")
        playGame(userChoose);
    })
})