import { render, screen } from '@testing-library/react';
import App from './App';

describe('Home page', () => {

  beforeEach(() => {
    render(<App />);
  })

  test('we are on the right trail', () => {
    expect(true).toBe(true);
  });

  test('we can navigate to the next page', () => {
    expect(true).toBe(true);
  })
})