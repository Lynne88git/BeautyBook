import React from 'react';
import ReactDOM from 'react-dom';
import Estheticians from './Estheticians';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Estheticians />, div);
  ReactDOM.unmountComponentAtNode(div);
});