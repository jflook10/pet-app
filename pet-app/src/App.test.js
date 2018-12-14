import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<ApolloProvider client={{}}>
  		<App/>
	</ApolloProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
