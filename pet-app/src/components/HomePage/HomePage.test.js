import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';

import HomePage from './HomePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<MockedProvider mocks={[]}>
  		<HomePage />
	</MockedProvider>, div)
  ReactDOM.unmountComponentAtNode(div);
});
