// Lesson 12.1

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

//Lesson 12.2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

//Lesson 12.3

let oneOfFilm = prompt('Один из последних просмотренных фильмов?', '');
let filmScore = prompt('Оцените данный фильм от 0 до 10','');

personalMovieDB.movies[oneOfFilm] = filmScore;