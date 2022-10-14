const imageElement = document.getElementById("cocktail-image")

//指定したサーバーにデータを取りに行く
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((res) => {
//     return res.json() // 結果を json として読み込む
//   })
//   .then((data) => {
//     imageElement.src = data.message // 画像を表示する
//     console.log(data)
//   })

//rennshuu
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((res) => {
//     return res.json()
//   })
//   .then((data) => {
//     imageElement.src = data.message
//   })

//カクテル
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    imageElement.src = data.drinks[0].strDrinkThumb
  })

//ネコ
// fetch("https://api.thecatapi.com/v1/images/search")
//   .then((res) => {
//     return res.json()
//   })
//   .then((json) => {
//     imageElement.src = json[0].url
//     console.log(json[0].url)
//   })
