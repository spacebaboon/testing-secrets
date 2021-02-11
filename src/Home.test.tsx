import { render, screen } from '@testing-library/react';
import App from './App';

describe('Home page', () => {

  beforeEach(() => {
      render(<App />);
  })

  test('we are on the right trail', () => {
    screen.getByText('Evil Time Traveller Portal');
  });

  test('we can navigate to the next page', () => {

  })
})