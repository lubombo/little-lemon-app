import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { MemoryRouter } from 'react-router-dom';

test('renders the BookingForm label', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={[]} dispatch={() => {}} />
    </MemoryRouter>
  );

  const headingElement = screen.getByText(/choose date/i); // <= dokładnie tak
  expect(headingElement).toBeInTheDocument();
});

