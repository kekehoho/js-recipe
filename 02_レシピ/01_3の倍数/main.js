//FizzBuzz//
//-----------------------------------------------//
// const genkiFunction = function (number) {
//   for (let n = 1; n <= number; n++) {
//     if (n % 15 === 0) {
//       console.log("FizzBuzz")
//     } else if (n % 3 === 0) {
//       console.log("Fizz")
//     } else if (n % 5 === 0) {
//       console.log("Buzz")
//     } else {
//       console.log(n)
//     }
//   }
// }
//-----------------------------------------------//

//favorite is 3
//------------------------------------------------//
const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!!")
    } else if (/3/.test(n)) {
      console.log(n + "!!!!!!!!")
    } else {
      console.log(n)
    }
  }
}

genkiFunction(100)
