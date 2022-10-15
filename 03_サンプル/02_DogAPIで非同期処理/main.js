const imageElement = document.getElementById("dog-image")
const select = document.getElementById("select")
const button = document.getElementById("confirm")
const options = select.options

console.log(select.options[0].value)
// const button = document.getElementById("button")

//指定したサーバーにデータを取りに行く
button.onclick = function () {
  if (options[0].selected) {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        return res.json() // 結果を json として読み込む
      })
      .then((data) => {
        imageElement.src = data.message.african[0] // 画像を表示する
        console.log(data.message.african)
      })
  } else if (options[1].selected) {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        return res.json() // 結果を json として読み込む
      })
      .then((data) => {
        imageElement.src = data.message // 画像を表示する
        console.log(data)
      })
  } else if (options[2].selected) {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        return res.json() // 結果を json として読み込む
      })
      .then((data) => {
        imageElement.src = data.message // 画像を表示する
        console.log(data)
      })
  } else if (options[3].selected) {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        return res.json() // 結果を json として読み込む
      })
      .then((data) => {
        imageElement.src = data.message // 画像を表示する
        console.log(data)
      })
  } else {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        return res.json() // 結果を json として読み込む
      })
      .then((data) => {
        imageElement.src = data.message // 画像を表示する
        console.log(data)
      })
  }
}

//rennshuu
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((res) => {
//     return res.json()
//   })
//   .then((data) => {
//     imageElement.src = data.message
//   })

//カクテル
// button.onclick = function () {
//   fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//     .then((res) => {
//       return res.json()
//     })
//     .then((data) => {
//       imageElement.src = data.drinks[0].strDrinkThumb
//     })
// }

//ネコ
// fetch("https://api.thecatapi.com/v1/images/search")
//   .then((res) => {
//     return res.json()
//   })
//   .then((json) => {
//     imageElement.src = json[0].url
//     console.log(json[0].url)
//   })
