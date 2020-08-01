import React from 'react';
import { render, fireEvent, queryByText, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Authors from '../Authors';
import authors from '../authors.json';

test("can scroll authors list after button click", () => {
  const { getByText, queryByText } = render(<Authors authors={authors} />);
  const leftClick = { button: 0 };
  const rollOutButtonTest = `Показать всех ${authors.length} авторов`;
  const rollUpButtonTest = 'Свернуть';
  const authorsContainer = screen.getByTestId('authorsRow');

  expect(authorsContainer).toHaveStyle('overflowX: hidden');
  expect(queryByText(rollUpButtonTest)).not.toBeInTheDocument();

  fireEvent.click(getByText(rollOutButtonTest), leftClick);
  expect(getByText(rollUpButtonTest)).toBeInTheDocument();
  expect(queryByText(rollOutButtonTest)).not.toBeInTheDocument();
  expect(authorsContainer).toHaveStyle('overflowX: auto');

  fireEvent.click(getByText(rollUpButtonTest), leftClick);
  expect(getByText(rollOutButtonTest)).toBeInTheDocument();
  expect(queryByText(rollUpButtonTest)).not.toBeInTheDocument();
  expect(authorsContainer).toHaveStyle('overflowX: hidden');
});