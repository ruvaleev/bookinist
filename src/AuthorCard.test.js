import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {shallow} from 'enzyme';

import AuthorCard from './AuthorCard';


const first_book = {
  'Title': 'Тихий Дон',
  'ShortDescription': 'Короткое описание',
  'PageCount': 697,
  'Language': 'Русский',
  'Progress': 90,
  'Cover': 'https://cover_image.url'
}
const second_book = {
  'Title': 'Тихий Дон 2',
  'ShortDescription': 'Короткое описание',
  'PageCount': 697,
  'Language': 'Русский',
  'Progress': 90,
  'Cover': 'https://cover_image.url'
}

const author = {
  'Name': 'Михаил Шолохов',
  'Email': 'ruvaleev@gmail.com',
  'Avatar': 'https://picture_url',
  'ShortInformation': 'Жизнеописание',
  'MinimumPrice': 10,
  'DesiredPrice': 50,
  'CollectedAmount': 100,
  'ExpectedAmount': 500,
  'Books': [first_book, second_book]
}

test("renders author's name in card", () => {
  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('Михаил Шолохов')).toBeInTheDocument();
});

test("renders author's email in card", () => {
  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('Email: ruvaleev@gmail.com')).toBeInTheDocument();
});

test("renders author's biography in card", () => {
  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('Жизнеописание')).toBeInTheDocument();
});

test("renders author's minimum price in card", () => {
  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('Минимальная цена подписки: $10')).toBeInTheDocument();
});

test("renders author's desired price in card", () => {
  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('Желаемая цена подписки: $50')).toBeInTheDocument();
});

test("renders author's collected price in card", () => {
  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('Уже собрано: $100')).toBeInTheDocument();
});

test("renders author's expected price in card", () => {
  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('Ожидается собрать: $500')).toBeInTheDocument();
});

test("renders author's photo in card", () => {
  const renderedAuthor = shallow(<AuthorCard author={author} />);
  expect(renderedAuthor.find("img").prop("src")).toEqual('https://picture_url');
});

test('renders all books of current author', () => {
  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('Тихий Дон')).toBeInTheDocument();
  expect(getByText('Тихий Дон 2')).toBeInTheDocument();
});