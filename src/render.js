import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App';
import authors from './authors.json';

const book = {
  'title': 'Тихий Дон',
  'shortDescription': 'Роман-эпопея в четырёх томах, написанный Михаилом Шолоховым.',
  'pageCount': 697,
  'language': 'Русский',
  'progress': 90,
  'cover': 'https://im0-tub-ru.yandex.net/i?id=870b0f1b0e747f4cbb518e82204be169&n=13',
  'authors': authors
}

const render = () => ReactDOMServer.renderToString(<App book={book}/>);

export default render;