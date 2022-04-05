// Lesson 12.1

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

start()

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function detectFilmLevel () {
    if (personalMovieDB.count < 10) {
        alert ('Маловато')
    } else if (personalMovieDB.count > 30) {
        alert ('Достаточно много')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert ('Среднее количество')
    } else {
        alert ('ERROR')
    }
}

detectFilmLevel ()

// for (let i=0; i < 2; i++) {
//     let oneOfFilm
//     let filmScore
//     do {
//         oneOfFilm = prompt('Один из последних просмотренных фильмов?', '');
//         if (oneOfFilm == null) {
//             break
//         if (oneOfFilm == false || oneOfFilm.length > 10) {
//             alert ('Введите корректное значение (короче 30 символов)')
//         }
//         }
//     } while (oneOfFilm == false || oneOfFilm.length > 30)
    
//     if (oneOfFilm == null) {
//         alert('ВВОД ОТМЕНЕН')
//         break
//     }

//     do {
//         filmScore = prompt('Оцените фильм от 1 до 10', '');
//         if (filmScore == null) {
//             break
//         if (filmScore == false) {
//             alert ('Введите корректное значение (короче 30 символов)')
//         }
//     } while (filmScore == false)
        
//     if (filmScore == null) {
//         alert('ВВОД ОТМЕНЕН')
//         break
//     }
//     personalMovieDB.movies[oneOfFilm] = filmScore;
// }

function rememberMyFilms () {
    for (let i = 0 ; i < 2 ; i++) {
        let oneOfFilm = prompt('Один из последних просмотренных фильмов?', '')
        let filmScore = prompt('Оцените фильм от 1 до 10', '')
        if (oneOfFilm != '' && filmScore != '' && oneOfFilm != null && filmScore != null && oneOfFilm.length < 30) {
            personalMovieDB.movies[oneOfFilm] = filmScore
        } else {
            console.log('error') 
            i--
        }
    }
}

rememberMyFilms()

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    
    for (let i = 0; i<3 ; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i+1}`)
        personalMovieDB.genres[i] = genre;
    }
}

writeYourGenres()

showMyDB()