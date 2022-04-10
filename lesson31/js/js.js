'use strict';

const circle = document.getElementsByClassName('circle')[0];
const body = document.getElementsByTagName('body')[0]

circle.style.backgroundColor = 'green'

let count = 0

function counter () {
    count++
    circle.innerHTML = count
}

function messageOut () {
    circle.style.fontSyze = '10px'
    circle.innerHTML = 'вернись'
}

// circle.addEventListener('mouseover', counter)
// circle.addEventListener('mouseout', messageOut)

circle.addEventListener('dblclick', event => {
    event.target.remove()
}
)

circle.addEventListener('mouseover', event => {
    event.toElement.style.backgroundColor = 'orange'
}
)

circle.addEventListener('mouseout', event => {
    event.fromElement.style.backgroundColor = 'green'
    console.log(event)
}
)

// body.addEventListener('click', event => {
//     event.path[0].remove()
// })





