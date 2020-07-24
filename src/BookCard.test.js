import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {shallow} from 'enzyme';


import BookCard from './BookCard';


const book = {
  'Title': 'Тихий Дон',
  'ShortDescription': 'Короткое описание',
  'PageCount': 697,
  'Language': 'Русский',
  'Progress': 90,
  'Cover': 'https://cover_image.url'
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
  const renderedBook = shallow(<BookCard book={book} />);
  expect(renderedBook.find('img').prop('src')).toEqual('https://cover_image.url');
});