var boxes = document.getElementById('boxes')

for(let index = 0; index < 9; index++) {
    boxes.innerHTML += `<div onclick={tick(this)} class='box'></div>`
}

var isFirstUser = true;

function tick(box) {
    if (isFirstUser === true) {
        box.innerHTML = `<img src="https://www.shutterstock.com/image-vector/black-check-mark-icon-tick-600nw-590651921.jpg"`
    }
}