import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookCard from './BookCard';

const firstAuthor = {
  'name': 'Михаил Шолохов',
  'email': 'ruvaleev@gmail.com',
  'avatar': 'https://sholohov_url',
  'shortInformation': 'Жизнеописание'
}

const secondAuthor = {
  'name': 'Василий Шукшин',
  'email': 'ruvaleev@gmail.com',
  'avatar': 'https://shukshin_url',
  'shortInformation': 'Жизнеописание'
}

const book = {
  'title': 'Тихий Дон',
  'shortDescription': 'Короткое описание',
  'pageCount': 697,
  'language': 'Русский',
  'progress': 90,
  'cover': 'https://cover_image.url',
  'minimumPrice': 10,
  'desiredPrice': 50,
  'collectedAmount': 100,
  'expectedAmount': 500,
  'authors': [firstAuthor, secondAuthor]
}

test("renders book's title in card", () => {
  const { getByText } = render(<BookCard book={book} />);
  expect(getByText('Тихий Дон')).toBeInTheDocument();
});

test("renders book's short description in card", () => {
  const { getByText } = render(<BookCard book={book} />);
  expect(getByText('Короткое описание')).toBeInTheDocument();
});

test("renders book's page count in card", () => {
  const { getByText } = render(<BookCard book={book} />);
  expect(getByText('Кол-во страниц: 697')).toBeInTheDocument();
});

test("renders book's language in card", () => {
  const { getByText } = render(<BookCard book={book} />);
  expect(getByText('Язык: Русский')).toBeInTheDocument();
});

test("renders book's current progress in card", () => {
  const { getByText } = render(<BookCard book={book} />);
  expect(getByText('Прогресс: 90%')).toBeInTheDocument();
});

test("renders book's cover in card", () => {
  const { container } = render(<BookCard book={book}/>);
  const cover = container.querySelector("[src='https://cover_image.url']");
  expect(cover).toBeInTheDocument();
});

test('renders minimum price in card', () => {
  const { getByText } = render(<BookCard book={book}/>);
  expect(getByText('Минимальная цена подписки: $10')).toBeInTheDocument();
});

test('renders desired price in card', () => {
  const { getByText } = render(<BookCard book={book}/>);
  expect(getByText('Желаемая цена подписки: $50')).toBeInTheDocument();
});

test('renders collected price in card', () => {
  const { getByText } = render(<BookCard book={book}/>);
  expect(getByText('Уже собрано: $100')).toBeInTheDocument();
});

test('renders expected price in card', () => {
  const { getByText } = render(<BookCard book={book}/>);
  expect(getByText('Ожидается собрать: $500')).toBeInTheDocument();
});

test('renders authors in card', () => {
  const { getByText } = render(<BookCard book={book}/>);
  expect(getByText(firstAuthor.name)).toBeInTheDocument();
  expect(getByText(secondAuthor.name)).toBeInTheDocument();
});