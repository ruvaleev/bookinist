import ReactDom from 'react-dom';
import React from 'react';

import App from './App';
import authors from './authors.json';

const book = {
  'title': 'Тихий Дон',
  'shortDescription': 'Роман-эпопея в четырёх томах, написанный Михаилом Шолоховым.',
  'pageCount': 697,
  'language': 'Русский',
  'progress': 90,
  'cover': 'https://im0-tub-ru.yandex.net/i?id=870b0f1b0e747f4cbb518e82204be169&n=13',
  'minimumPrice': 10,
  'desiredPrice': 50,
  'collectedAmount': 100,
  'expectedAmount': 500,
  'raiting': 9,
  'authors': authors
}

const currentUser = {
  email: 'president@google.com',
  firstName: 'Barak',
  lastName: 'Obama',
  avatarUrl: 'https://biografieonline.it/img/bio/box/b/Barack_Obama.jpg'
}

ReactDom.render(
  <App book={book} currentUser={currentUser}/>,
  document.getElementById('book')
)
