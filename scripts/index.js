// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const columnTemplate = document.querySelector('#column-template').content;
const titleTemplate = document.querySelector("#title-template").content;

// @todo: DOM узлы
const chartList = document.querySelector('.chart__list');
const titleItem = document.querySelector('.title__item')

// @todo: Функция создания карточки
function createCard(cardInfo) {
  const card = cardTemplate.querySelector('.chart__item').cloneNode(true);
  const titleName = card.querySelector('.title__name');
  const titleStatus = card.querySelector('.title__status');
  const columnList = card.querySelector('.column__list');
  const titleList = card.querySelector('.title__list');
  const titleItem = card.querySelector('.title__item');

  titleName.textContent = cardInfo.title;
  titleStatus.textContent = cardInfo.status;

  createList(columnList, cardInfo.areas, createColumn);
  createList(titleList, cardInfo.areas, createTitle);

  return card;
}

// @todo: Функция создания колонки
function createColumn(columnInfo) {
  const column = columnTemplate.querySelector('.column__item').cloneNode(true);

  const columnValue = column.querySelector('.column__value');
  const columnScale = column.querySelector('.column__scale');

  if (columnInfo.value === 0) {
    columnScale.style.border = 'none';
    columnValue.textContent = '';
  } else {
    columnValue.textContent = columnInfo.value;
    columnScale.style.height = columnInfo.value + 'px';
  }

  return column;
}

// @todo: Функция создания заголовка
function createTitle(textInfo) {
  const title = titleTemplate.querySelector('.title__item').cloneNode(true);
  const titleText = title.querySelector('.title__text');

  titleText.textContent = textInfo.name;

  return title;
}

// @todo: Функция создания списка
function createList(list, array, creationFunction) {
  array.forEach(element => {
    const item = creationFunction(element);
    list.append(item);
  })
}

// @todo: Функция удаления карточки
// function deleteCard(element) {
//   element.remove();
// }

// @todo: Вывести карточки на экран
сardDetails.forEach(сard => {
  const createdElement = createCard(сard);
  chartList.append(createdElement);
});
