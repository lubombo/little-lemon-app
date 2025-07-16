import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Little Lemon header', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
const headerElement = screen.getByRole('heading', { name: /little lemon/i });
  expect(headerElement).toBeInTheDocument();
});
