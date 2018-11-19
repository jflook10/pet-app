import React from 'react';
import ReactDOM from 'react-dom';
import CreatePetPage from './CreatePetPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreatePetPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
