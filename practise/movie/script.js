"use strict";

let numberOfFilms;

let correct = false;
do {
  numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
  if (numberOfFilms < 0) {
    alert("Количество указано неверно!");
  } else {
    correct = true;
  }
} while (!correct);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < numberOfFilms; i++) {
  const movie = prompt("Один из последних просмотренных фильмов", ""),
    rating = +prompt("Насколько оцените его?", "");
  if (
    movie != null &&
    movie.length != 0 &&
    rating > 0 &&
    rating < 10 &&
    movie.length <= 50
  ) {
    personalMovieDB.movies[movie] = rating;
  } else {
    i--;
    alert("Данные введены неверно - попробуйте еще раз!");
  }
}

if (numberOfFilms < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
  alert("Вы классический зритель");
} else if (numberOfFilms > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка!");
}

console.log(personalMovieDB);
