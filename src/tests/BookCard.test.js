import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookCard from '../components/shared/BookCard/index';
import recommendations from '../components/shared/BookCard/books.json';

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
  'raiting': 9,
  'authors': [firstAuthor, secondAuthor],
  'recommendations': recommendations
}

const leftClick = { button: 0 };
const subscribeButton = 'Подписаться';

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

test('renders raiting in card', () => {
  const { getByText } = render(<BookCard book={book}/>);
  expect(getByText('Рейтинг: 9')).toBeInTheDocument();
});

test('user sees modal window with subscription info when clicks to subscribe button', () => {
  const { getAllByText } = render(<BookCard book={book}/>);
  const subscriptionModal = screen.getByTestId('subscriptionModal');

  expect(subscriptionModal).toHaveStyle('display: none');
  fireEvent.click(getAllByText(subscribeButton)[0], leftClick);
  expect(subscriptionModal).toHaveStyle('display: block');
});

test('user can close modal window with subscription info', () => {
  const { getAllByText, getByText } = render(<BookCard book={book}/>);
  const subscriptionModal = screen.getByTestId('subscriptionModal');

  expect(subscriptionModal).toHaveStyle('display: none');
  fireEvent.click(getAllByText(subscribeButton)[0], leftClick);
  expect(subscriptionModal).toHaveStyle('display: block');

  fireEvent.click(getByText('Закрыть'), leftClick);
  expect(subscriptionModal).toHaveStyle('display: none');
});

test('user can see changed raiting after subscription', () => {
  const { getAllByText, getByText } = render(<BookCard book={book}/>);
  const subscriptionModal = screen.getByTestId('subscriptionModal');
  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert

  expect(getByText('Рейтинг: 9')).toBeInTheDocument();

  fireEvent.click(getAllByText(subscribeButton)[0], leftClick);
  fireEvent.click(getAllByText(subscribeButton)[1], leftClick);

  expect(subscriptionModal).toHaveStyle('display: none');
  expect(getByText('Рейтинг: 10 (Популярная книга)')).toBeInTheDocument();

  window.alert = jsdomAlert;  // restore the jsdom alert
});

test('modal window changes text after subscription', () => {
  const { getAllByText, getByText, queryByText } = render(<BookCard book={book}/>);
  const subscriptionModal = screen.getByTestId('subscriptionModal');
  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert

  expect(getByText('Переведете нам больше денег - книга выйдет быстрее!')).toBeInTheDocument();
  expect(queryByText('Вы уверены, что хотите отписаться?')).not.toBeInTheDocument();

  fireEvent.click(getAllByText(subscribeButton)[0], leftClick);
  fireEvent.click(getAllByText(subscribeButton)[1], leftClick);

  expect(subscriptionModal).toHaveStyle('display: none');
  expect(getByText('Вы уверены, что хотите отписаться?')).toBeInTheDocument();
  expect(queryByText('Переведете нам больше денег - книга выйдет быстрее!')).not.toBeInTheDocument();

  window.alert = jsdomAlert;  // restore the jsdom alert
});
