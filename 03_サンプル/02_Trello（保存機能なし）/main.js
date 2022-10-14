const inputElement = document.getElementById("input-todo1")
const inputElement2 = document.getElementById("input-todo2")
const inputElement3 = document.getElementById("input-todo3")
const container = document.getElementById("geek")
const container2 = document.getElementById("daigaku")
const container3 = document.getElementById("kaji")
const addButton = document.getElementById("add-button1")
const addButton2 = document.getElementById("add-button2")
const addButton3 = document.getElementById("add-button3")

// 追加ボタンを押したときの処理を登録
addButton.onclick = function () {
  // カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}

addButton2.onclick = function () {
  // カードを作成する
  const card = createCard(inputElement2.value)
  container2.append(card)

  // 入力欄を空にする
  inputElement2.value = ""
}

addButton3.onclick = function () {
  // カードを作成する
  const card = createCard(inputElement3.value)
  container3.append(card)

  // 入力欄を空にする
  inputElement3.value = ""
}

//エンターキー
//------------------------------------------
//エンターキーを押したときの処理を登録
document.onkeydown = function (e) {
  // カードを作成する
  if (e.key === "Enter" && inputElement.value != "") {
    const card = createCard(inputElement.value)
    container.append(card)
    inputElement.value = ""
  } else if (e.key === "Enter" && inputElement2.value != "") {
    const card = createCard(inputElement2.value)
    container2.append(card)
    inputElement2.value = ""
  } else if (e.key === "Enter" && inputElement3.value != "") {
    const card = createCard(inputElement3.value)
    container3.append(card)
    inputElement3.value = ""
  }
}
//---------------------------------------------

//-------------------------------------------------
// addButton.onclick = function () {
//   const text = inputElement.value

//   const card = document.createElement("div")
//   card.className = "card"

//   const todo = document.createElement("div")
//   todo.className = "todo"
//   todo.textContent = text

//   card.append(todo)
//   container.append(card)

//   inputElement.value = ""

//   const deleteButton = document.createElement("div")
//   deleteButton.className = "delete"

//   // 削除ボタンを押したときの処理を登録
//   deleteButton.onclick = function () {
//     // カードを削除する
//     card.remove()
//   }
//   card.append(deleteButton)
// }
//-------------------------------------------------

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}
