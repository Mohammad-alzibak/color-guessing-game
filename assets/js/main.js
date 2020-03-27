let header = document.getElementById("header")
let bgc = document.getElementsByClassName("divs")
let result = document.getElementById("result")

function randomColor() {
    return Math.floor(Math.random() * 255).toFixed()
}
for (let elt of bgc) {
    elt.style.background = `rgb(${randomColor()},${randomColor()},${randomColor()})`
    let random = Math.floor(Math.random() * 5).toFixed()
    header.innerHTML = `guess the color rgb(${randomColor()},${randomColor()},${randomColor()})`
    elt.addEventListener("click", (event) => {
        if (event.target.style.background == header.innerHTML) {
            result.innerHTML = "you got it right! Super!!"
        } else {
            result.innerHTML += `thats wrong, but lets try it one more time <br> `
        }
    })
}
function reloadPage() {
    location.reload(true);
}