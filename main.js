// 1. 랜덤숫자 만들기
// 2. go버튼 동작
// 2-1 . 결과 나오기 ( up, down, 정답)
// 3. reset버튼 동작
// 4. 1~100사이의 숫자만 나오게 하기
// 5. 남은 회수 표시 및 차감시키기
// 6. 정답 맞췄을경우 go 버튼 비활성화
// 7. 기회가 0이면 게임오버로 go버튼 비활성화
// 8. 같은 숫자 입력못하게 하기



let randomNum = 0;
let userInput = document.getElementById("userInput")
let goBtn = document.getElementById("goBtn")
let result = document.getElementById("result")
let resetBtn = document.getElementById("resetBtn")
let chance = document.getElementById("chance")
let chanceNum = 5;
let gameOver = false;
let history = []

//ㅇ

//버튼 동작
goBtn.addEventListener("click", go)
resetBtn.addEventListener("click", reset)







//reset버튼 함수
function reset(){
    gameOver = false;
    goBtn.disabled = false;
    random()
    chanceNum = 5;
    chance.textContent = "남은기회 : 5";
    console.log(chanceNum)
    history = []
}



//go버튼 함수
function go() {
    

    let userNum = userInput.value
    //체크 console.log(userNum)
    if (userNum > 100 || userNum < 1 ){
        result.textContent = "1~100사이 숫자를 입력바랍니다."
        return;
    }
    if(history.includes(userNum)){
        result.textContent = "이미 입력했던 숫자입니다."
        return;
    }

    history.push(userNum)
    chanceNum --;
    console.log(history)



    if (userNum > randomNum) {
        result.textContent = "Down~~~";
    } else if (userNum < randomNum) {
        result.textContent = "Up !!";
    } else if (userNum === randomNum) {
        result.textContent = "♨ 정답 ♨";
        gameOver = true;
    }
    chance.textContent = (`남은기회 : ${chanceNum}`)

    if(chanceNum < 1){
        gameOver = true;
    }

    if(gameOver){
        goBtn.disabled = true;
    }
}

//랜덤 숫자 만들기
function random() {
    randomNum = Math.floor(Math.random() * 100) + 1
    console.log(`정답 : ${randomNum}`)
}



random()
