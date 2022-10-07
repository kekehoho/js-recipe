const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countup = function () {
  count += 1
  display.textContent = count / 100
}

let id = null

button.onclick = function () {
  if (id === null) {
    id = setInterval(countup, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
