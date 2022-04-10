'use strict';

const box = document.getElementById('box')

const circleArr = document.getElementsByClassName('circle')

const circle1 = circleArr[0]

const buttonArr = document.getElementsByTagName('button')

const button2 = buttonArr[1]

const hearts = document.querySelectorAll('.heart')

const firstHeart = document.querySelector('.heart')

const wrapper = document.querySelector('.wrapper')


// действия с элементами

box.style.backgroundColor = 'green'
box.style.marginLeft = '50px'
box.style.width = '300px'

circleArr[2].style.backgroundColor = '#222'
circleArr[0].style.borderRadius = '40%'
circleArr[0].style.backgroundColor = 'orange'

//Изменение сразу нескольких CSS свойств
hearts[1].style.cssText = 'background-color: orange; border-radius: 20%; margin: 30px 20px 0 20px'
buttonArr[4].style.cssText = 'background-color: blue; border-radius: 40%; margin: 10px 50px 0 20px; font-size: 40px; height: 100px'

// Создание элементов

const div  = document.createElement('div')
const div1  = document.createElement('div')
const div2  = document.createElement('div')
const div3  = document.createElement('div')
// const text = document.createTextNode('Тут я был')

// Действия с переменной-элементом: 
// добавление класса, добавление в документ

div.classList.add('black');
div1.classList.add('black');
div2.classList.add('black');
div3.classList.add('append');

document.body.append(div);

document.querySelector('.box').append(div1);

//добавление в начало элемента
// wrapper.prepend(div2);

// добавление перед или после элемента
//до элемента hearts[1]
// hearts[1].before(div3)

//после элемента hearts[1]
hearts[1].after(div3)

//удаление элемена
buttonArr[3].remove()

//замена элемента (удалит элемент и заместо него поставит другой)
buttonArr[1].replaceWith(hearts[0])


//Старые команды

//Добавление в конец элемента другого элемента
// wrapper.appendChild(div)


//Добавление текста
buttonArr[0].innerHTML = 'Hello'
circleArr[1].innerHTML = '<h1>HEADER</h1>'

// добавление элемента перед, в начале, в конце или после определенного элемента
const insert = document.querySelector('.insert')
insert.insertAdjacentHTML('afterend', '<h1>ЭЛЕМЕНТ</h1>')














