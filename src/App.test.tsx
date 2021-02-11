import { render, screen } from '@testing-library/react';
import App from './App';

test('we are on the right trail', () => {
  render(<App />);
  screen.getByText(/hello!/i);
});
