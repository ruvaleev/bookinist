import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App';

const book = {
  'Title': 'Тихий Дон',
  'ShortDescription': 'Роман-эпопея в четырёх томах, написанный Михаилом Шолоховым.',
  'PageCount': 697,
  'Language': 'Русский',
  'Progress': 90,
  'Cover': 'https://im0-tub-ru.yandex.net/i?id=870b0f1b0e747f4cbb518e82204be169&n=13'
}

const author = {
  'Name': 'Михаил Шолохов',
  'Email': 'ruvaleev@gmail.com',
  'Avatar': 'https://im0-tub-ru.yandex.net/i?id=4e0667541c65ae35d268f00b6ffe82d6&n=13',
  'ShortInformation': 'Михаи́л Алекса́ндрович Шо́лохов (11 [24] мая 1905, хутор Кружилинский, станица Вёшенская, Донецкий округ, область Войска Донского, Российская Империя',
  'MinimumPrice': 10,
  'DesiredPrice': 50,
  'CollectedAmount': 100,
  'ExpectedAmount': 500,
  'Books': [book]
}

const render = () => ReactDOMServer.renderToString(<App author={author}/>);

export default render;