import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AuthorCard from '../components/shared/Authors/AuthorCard';

const author = {
  'name': 'Михаил Шолохов',
  'email': 'ruvaleev@gmail.com',
  'avatar': 'https://picture_url',
  'shortInformation': 'Жизнеописание'
}

test("renders author's name in card", () => {
  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('Михаил Шолохов')).toBeInTheDocument();
});

test("renders author's email in card", () => {
  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('email: ruvaleev@gmail.com')).toBeInTheDocument();
});

test("renders author's biography in card", () => {
  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('Жизнеописание')).toBeInTheDocument();
});

test("renders author's photo in card", () => {
  const { container } = render(<AuthorCard author={author} />);
  const avatar = container.querySelector("[src='https://picture_url']")
  expect(avatar).toBeInTheDocument();
});
