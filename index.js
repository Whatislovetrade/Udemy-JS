'use strict'

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
  
    // eslint-disable-next-line eqeqeq
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const userQuestions = prompt('Один из последних просмотренных фильмов?', '').trim()
      const userQuestions2 = prompt('На сколько оцените его?', '')
  
      if (userQuestions !== null && userQuestions2 !== null && userQuestions !== '' && userQuestions2 !== '' && userQuestions.length < 50) {
        personalMovieDB.movies[userQuestions] = userQuestions2
      } else {
        i--
      }
    }
  },
  detectedPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотренно довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман')
    } else {
      console.log('Произошла ошибка')
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB)
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false
    } else {
      personalMovieDB.privat = true
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`)
      if(genre === '' || genre == null ) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе')
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre
      }
    }
    
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`)
    })
  },
}