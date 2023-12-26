'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

for (let i = 0; i < 2; i++) {
  const userQuestions = prompt('Один из последних просмотренных фильмов?', '')
  const userQuestions2 = prompt('На сколько оцените его?', '')

  if (userQuestions !== null && userQuestions2 !== null && userQuestions !== '' && userQuestions2 !== '' && userQuestions.length < 50) {
    personalMovieDB.movies[userQuestions] = userQuestions2
  }
}

console.log(personalMovieDB)
