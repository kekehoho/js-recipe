//--------------------------------------------------//
//ボタン
// const button = document.getElementById("button")

// const alertMessage = function () {
//   alert("クリックしたね")
// }

// // 関数を登録
// button.onclick = alertMessage

// const button = document.getElementById("button")

// button.onclick = function () {
//   alert("クリックしたね")
// }

// const button = document.getElementById("button")

// const alertMessage = function () {
//   alert("クリックしたね")
// }

// button.onclick = alertMessage()
//----------------------------------------------------//

// input 要素と input イベント
// const inputText = document.getElementById("input-text")
// const inputDate = document.getElementById("input-date")

// const sayHello = function () {
//   console.log("hello")
// }

// inputText.oninput = sayHello
// inputDate.oninput = sayHello

//イベントオブジェクト
// const inputText = document.getElementById("input-text")
// const inputDate = document.getElementById("input-date")

// const logValue = function (e) {
//   //  console.log(e.target.value)
//   console.log(e)
// }

// inputText.oninput = logValue
// inputDate.oninput = logValue

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

document.onkeydown = function (e) {
  console.log(e.key)
}

inputText.oninput = onkeydown
inputDate.oninput = onkeydown
