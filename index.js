'use strict'

let numberOfFilms

function start () {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

  // eslint-disable-next-line eqeqeq
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
  }
}

start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

// eslint-disable-next-line no-unused-vars
function rememberMyFilms () {
  for (let i = 0; i < 2; i++) {
    const userQuestions = prompt('Один из последних просмотренных фильмов?', '')
    const userQuestions2 = prompt('На сколько оцените его?', '')

    if (userQuestions !== null && userQuestions2 !== null && userQuestions !== '' && userQuestions2 !== '' && userQuestions.length < 50) {
      personalMovieDB.movies[userQuestions] = userQuestions2
    } else {
      i--
    }
  }
}

rememberMyFilms()

function detectedPersonalLevel () {
  if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель')
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман')
  } else {
    console.log('Произошла ошибка')
  }
}

detectedPersonalLevel()

function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMovieDB)
  }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres () {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
  }
}

writeYourGenres()
