import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

describe('<BookingForm />', () => {
  test('it should mount', () => {
    render(<BookingForm />);
    
    const bookingForm = screen.getByTestId('BookingForm');

    expect(bookingForm).toBeInTheDocument();
  });
});