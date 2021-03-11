import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  render, fireEvent, waitFor, screen, getByText, toBeInTheDocument
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StyleSelector from '../react-client/src/components/product-overview/tests/StyleSelectorTest.jsx';
import handlers from './msw/handlers.js';
import axios from 'axios';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Style Selector', () => {
  test('it renders a component which does a get request', async () => {
    const { container, getByText } = render(<StyleSelector />);
    await waitFor(() => {
      expect(getByText('Forest Green & Black')).toBeInTheDocument();
    })
  })
  test('a button is on the page that reacts to being clicked', () => {
    const { container, getByText } = render(<StyleSelector />)
    const button = getByText('0')
    fireEvent.click(button)
    expect(button).toHaveTextContent('1')
    fireEvent.click(button)
    expect(button).toHaveTextContent('2')
  })
});

