import React from 'react';
import ReactDOM from 'react-dom';
import CostCalculator from './CostCalculator';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CostCalculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});