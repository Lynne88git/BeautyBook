import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentDetails from './AppointmentDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppointmentDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});