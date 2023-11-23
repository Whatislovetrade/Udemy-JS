const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

const userQuestions = prompt('Один из последних просмотренных фильмов?', '')
const userQuestions2 = prompt('На сколько оцените его?', '')

const userQuestions3 = prompt('Один из последних просмотренных фильмов?', '')
const userQuestions4 = prompt('На сколько оцените его?', '')

personalMovieDB.movies[userQuestions] = userQuestions2
personalMovieDB.movies[userQuestions3] = userQuestions4

console.log(personalMovieDB)
