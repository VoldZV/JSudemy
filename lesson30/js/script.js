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
    index.innerHTML = `${i+1}) ` + movieDB.movies[i] + `<div class="delete"></div>`
})

//Также возможно было очистить общий элемент и потом наполнить его

// for (let i=0; i<movieList.length; i++) {
//     movieList[i].innerHTML = movieDB.movies[i]
// }

// Задача 5

// for (let i=0; i<movieList.length; i++) {
//     movieList[i].insertAdjacentHTML('afterbegin',`${i+1}) `)
// }


//LESSON 33

const inputValues = document.querySelector('.adding__input')

const addButton = document.querySelector('.add button')
addButton.setAttribute('type', 'reset') // отменяет атрибут type = submit

const filmListElement = document.querySelector('.promo__interactive-list');



addButton.addEventListener('click', (event) => {
    // event.preventDefault(); // отменить стандартное поведение - обновление страницы
    let inputValue = inputValues.value;
    if (inputValues.value) {
       
        
        if (inputValue.length > 15) {
            inputValue = inputValue.substr(0,15) + '...'
        }
        movieDB.movies.push(inputValue);
        movieDB.movies.sort();
        const newFilm = document.createElement('li');
        newFilm.classList.add('promo__interactive-item');
        filmListElement.append(newFilm);
        const newMovieList = document.querySelectorAll('.promo__interactive-item');
        newMovieList.forEach((index,i) => {
            index.innerHTML = `${i+1}) ` + movieDB.movies[i] + `<div class="delete"></div>`
        });
        if (document.querySelector('input[type = "checkbox"]').checked) {
            console.log(`Добавлен любимый фильм: ${inputValue}`);
            
        } else {
         console.log(`Добавлен фильм ${inputValue}`)
        };
    }
    
    
})

filmListElement.addEventListener('click', function (event) {
    if(event.target.closest('.promo__interactive-item:hover .delete')) {
        console.log('Удален фильм: ' + event.target.parentElement.textContent.slice(3))
        event.target.parentElement.remove();
        movieDB.movies = [];
        const newFilmList = document.querySelectorAll('.promo__interactive-item');
        newFilmList.forEach((index, i) => {
            index.innerHTML = `${i+1}) ` + index.innerHTML.slice(3);
            movieDB.movies[i] = index.textContent.slice(3)
        });
        // console.log(movieDB.movies);
    } else {
        console.log('не попал на корзину')
    }
});
