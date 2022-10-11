const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const Buttons = document.getElementById("buttons")
// const choice1 = document.getElementById("choice-1")
// const choice2 = document.getElementById("choice-2")
// const choice3 = document.getElementById("choice-3")
// const choice4 = document.getElementById("choice-4")
const choice1 = document.createElement("button")
const choice2 = document.createElement("button")
const choice3 = document.createElement("button")
const choice4 = document.createElement("button")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
    //new-----------------------------------------------
    {
      text: "エネゴリ",
      feedback: "残念!エネゴリはENEOSのマスコットキャラだよ!",
    },
    //----------------------------------------------------
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  //new--------------------------------------
  choice4.textContent = quiz.choices[3].text
  //-----------------------------------------
}

Buttons.appendChild(choice1)
Buttons.appendChild(choice2)
Buttons.appendChild(choice3)
Buttons.appendChild(choice4)

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}
choice4.onclick = function () {
  // 2 番目の選択肢を選択
  choose(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()

//-------------------------------------------------------//
//マイクイズ
// const quiz = {
//   text: "私の研究内容は何でしょう？",
//   // image: "Ganymede.jpg",
//   choices: [
//     {
//       text: "宇宙物理学",
//       feedback: "正解！ブラックホールの研究をしています！",
//     },
//     {
//       text: "素粒子物理学",
//       feedback: "残念！素粒子物理は学部時代に心が折れてやめました。",
//     },
//     {
//       text: "プラズマ物理学",
//       feedback: "残念！プラズマ物理は授業内容がつまらなすぎてやめました。",
//     },
//   ],
// }

// // quiz を画面に表示する関数
// const reloadQuiz = function () {
//   // 問題文を表示
//   quizText.textContent = "Q. " + quiz.text

//   // 画像を表示
//   // quizImage.src = "./images/" + quiz.image

//   // 選択肢（ボタン）の中身を表示
//   choice1.textContent = quiz.choices[0].text
//   choice2.textContent = quiz.choices[1].text
//   choice3.textContent = quiz.choices[2].text
// }

// // choiceNumber番目の選択肢を選択
// const choose = function (choiceNumber) {
//   // フィードバックを表示
//   feedback.textContent = quiz.choices[choiceNumber].feedback
// }

// choice1.onclick = function () {
//   // 0 番目の選択肢を選択
//   choose(0)
// }
// choice2.onclick = function () {
//   // 1 番目の選択肢を選択
//   choose(1)
// }
// choice3.onclick = function () {
//   // 2 番目の選択肢を選択
//   choose(2)
// }

// // reloadQuiz関数 を実行して、クイズを画面に表示する
// reloadQuiz()
