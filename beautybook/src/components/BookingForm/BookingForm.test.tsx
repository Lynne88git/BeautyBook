import React from 'react';
import ReactDOM from 'react-dom';
import BookingForm from './BookingForm';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookingForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});