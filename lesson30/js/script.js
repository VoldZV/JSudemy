/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)      ++++

2) Изменить жанр фильма, поменять "комедия" на "драма"              +++++

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту       ++++++++++++++

5) Добавить нумерацию выведенных фильмов     ++++++*/    

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// Задача 1
const advertisement = document.querySelectorAll('.promo__adv img')

advertisement.forEach(item =>{
    item.remove()
} )
// for (let i=0; i<advertisement.length; i++) {
//     advertisement[i].remove()
// }

// Задача 2

const myGenre = document.getElementsByClassName('promo__genre');
myGenre[0].innerHTML = 'ДРАМА'

// ЗАДАЧА 3

const poster = document.getElementsByClassName('promo__bg');
poster[0].style.backgroundImage = 'url("img/bg.jpg")'


// ('background: url("../img/bg.jpg") center center/cover no-repeat')


// ЗАДАЧА 4 и Задача 5

const movieList = document.querySelectorAll('.promo__interactive-item')
movieDB.movies.sort()

movieList.forEach((index,i) => {
    index.innerHTML = `${i+1}) ` + movieDB.movies[i]
})

//Также возможно было очистить общий элемент и потом наполнить его

// for (let i=0; i<movieList.length; i++) {
//     movieList[i].innerHTML = movieDB.movies[i]
// }

// Задача 5

// for (let i=0; i<movieList.length; i++) {
//     movieList[i].insertAdjacentHTML('afterbegin',`${i+1}) `)
// }


