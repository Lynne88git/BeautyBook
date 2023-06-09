import React from 'react';
import ReactDOM from 'react-dom';
import Services from './Services';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Services />, div);
  ReactDOM.unmountComponentAtNode(div);
});