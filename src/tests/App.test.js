import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';

import App from '../App';
import { newBookPath, rootPath } from 'helpers/routes';

describe('Routing', () => {
  it('renders Main page correctly', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('Bookinist')).toBeInTheDocument();
    expect(queryByText('Новая книга')).toBeInTheDocument();
  })

  it('navigating to new book form and back to main page correctly', () => {
    const history = createMemoryHistory();
    const result = render(<App history={history}/>);

    expect(result.queryByText('New Book')).not.toBeInTheDocument();
    expect(result.queryByText('Новая книга')).toBeInTheDocument();

    const newBookLink = result.getByText('Новая книга')
    userEvent.click(newBookLink)
    expect(result.queryByText('New Book')).toBeInTheDocument();
    expect(result.queryByText('Новая книга')).not.toBeInTheDocument();
    expect(history.location.pathname).toBe(newBookPath());

    const mainPageLink = result.getByText('Bookinist')
    userEvent.click(mainPageLink)
    expect(result.queryByText('New Book')).not.toBeInTheDocument();
    expect(result.queryByText('Новая книга')).toBeInTheDocument();
    expect(history.location.pathname).toBe(rootPath());
  })
})
