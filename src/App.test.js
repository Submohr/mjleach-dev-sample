import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hi im mleach', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hi. I'm @mleach./i);
  expect(linkElement).toBeInTheDocument();
});
