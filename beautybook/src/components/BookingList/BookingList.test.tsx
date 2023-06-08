import React from 'react';
import ReactDOM from 'react-dom';
import BookingList from './BookingList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookingList />, div);
  ReactDOM.unmountComponentAtNode(div);
});