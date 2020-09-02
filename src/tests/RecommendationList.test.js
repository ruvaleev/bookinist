import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RecommendationList from '../components/shared/BookCard/RecommendationList';

const recommendations = [
  { 
    "id": 1,
    "title": "От Заката до Рассвета",
    "cover": "https://sun9-12.userapi.com/c854416/v854416981/a6cac/f6PzhBoCJzM.jpg",
    "authors": [
      {
        "name": "Квентин Тарантино"
      }
    ]
  },
  { 
    "id": 2,
    "title": "Игра Престолов",
    "cover": "https://www.kinobusiness.com/upload/iblock/dea/deab6a856e93af189241fa935e7936c0.jpg",
    "authors": [
      {
        "name": "Джордж Мартин"
      }
    ]
  },
  { 
    "id": 3,
    "title": "Похождения бравого солдата Швейка",
    "cover": "https://sun9-48.userapi.com/c837337/v837337269/3ae8d/LhcbcPDR80c.jpg",
    "authors": [
      {
        "name": "Ярослав Гашек"
      }
    ]
  },
  { 
    "id": 4,
    "title": "Чиполлино",
    "cover": "http://domovenok.name/_ld/4/s73141191.jpg",
    "authors": [
      {
        "name": "Джанни Родари"
      }
    ]
  }
]

const leftClick = { button: 0 };
// const subscribeButton = 'Подписаться';

test('renders only three books', () => {
  const { getByText, queryByText } = render(<RecommendationList recommendations={recommendations}/>);
  expect(getByText('Квентин Тарантино')).toBeInTheDocument();
  expect(getByText('Джордж Мартин')).toBeInTheDocument();
  expect(getByText('Ярослав Гашек')).toBeInTheDocument();
  expect(queryByText('Джанни Родари')).not.toBeInTheDocument();
});

test('rotates recommendations by click', () => {
  const { getByText, queryByText } = render(<RecommendationList recommendations={recommendations}/>);

  expect(getByText('Квентин Тарантино')).toBeInTheDocument();
  expect(queryByText('Джанни Родари')).not.toBeInTheDocument();
  const removeRecommendation = screen.getByTestId('remove_1');
  fireEvent.click(removeRecommendation, leftClick);

  expect(getByText('Джанни Родари')).toBeInTheDocument();
  expect(queryByText('Квентин Тарантино')).not.toBeInTheDocument();
});
