import React from 'react';
import ReactDOM from 'react-dom';
import TimeSlots from './TimeSlots';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeSlots />, div);
  ReactDOM.unmountComponentAtNode(div);
});