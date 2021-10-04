import React from 'react';
import { render } from '@testing-library/react';
import App2 from './App2';

test('renders learn react link', () => {
  const { getByText } = render(<App2 />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
