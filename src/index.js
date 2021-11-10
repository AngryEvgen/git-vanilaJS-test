'use strict';
document.addEventListener('DOMContentLoaded', function () {
  let url = 'https://swapi.dev/api/people/';
  let tds = document.querySelectorAll('td');
  let info = document.querySelector('.info');
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
  function setCharacters(arr) {
    for (let i = 0; i < arr.length; i++) {
      let td = tds[i];
      let item = arr[i];

      td.innerHTML = item.name;
    }
  }
  // Инициализация приложения
  async function initApp(url) {
    const { results } = await getData(url);

    setCharacters(results);

    for (let i = 0; i < tds.length; i++) {
      let td = tds[i];

      td.addEventListener('click', function () {
        let result = results[i];

        info.innerHTML = `<li>Name: ${result.name}</li>
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
  initApp(url);
});
