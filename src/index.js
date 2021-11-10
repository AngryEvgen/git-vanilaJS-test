'use strict';
// Получаем данные
async function getData(path) {
  try {
    const res = await fetch(path);
    return res.json();
  } catch (error) {
    alert(error.message);
  }
}

// Рапсределяем персонажей по ячейкам
function setCharacters(arr, tds) {
  for (let i = 0; i < arr.length; i++) {
    let td = tds[i];
    let item = arr[i];

    td.innerHTML = item.name;
  }
}

// Добавляем обработчик событий на каждую ячейку
function handleClick(arr, cells, element) {
  for (let i = 0; i < cells.length; i++) {
    let td = cells[i];

    td.addEventListener('click', function () {
      let result = arr[i];

      element.innerHTML = `<li>Name: ${result.name}</li>
      <li>Height: ${result.height}</li>
      <li>Mass: ${result.mass}</li>
      <li>Hair color: ${result.hair_color}</li>
      <li>Skin color: ${result.skin_color}</li>
      <li>Eye color: ${result.eye_color}</li>
      <li>Birth year: ${result.birth_year}</li>
      <li>Gender: ${result.gender}</li>`;
    });
  }
}

// Инициализация приложения
async function initApp(path, cells, element) {
  const { results } = await getData(path);
  setCharacters(results, cells);
  handleClick(results, cells, element);
}

document.addEventListener('DOMContentLoaded', function () {
  const URL = 'https://swapi.dev/api/people/';
  let tds = document.querySelectorAll('td');
  let info = document.querySelector('.info');

  initApp(URL, tds, info);
});
