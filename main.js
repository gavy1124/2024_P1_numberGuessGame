




let randomNum = 0;
let userInput = document.getElementById("userInput")
let goBtn = document.getElementById("goBtn")
let result = document.getElementById("result")





//ㅇ

//버튼 동작
goBtn.addEventListener("click",go)



//go버튼
function go(){
    let userNum = userInput.value
    //체크 console.log(userNum)

    if(userNum > randomNum){
        result.textContent = "Down~~~"
    }else if(userNum < randomNum){
        result.textContent = "Up !!"
    }else if(userNum == randomNum){
        result.textContent = "♨ 정답 ♨"
    }
}







//랜덤 숫자 만들기
function random() {
    randomNum = Math.floor(Math.random() * 100) + 1
    console.log(`정답 : ${randomNum}`)
}



random()
