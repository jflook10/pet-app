import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import CreatePetPage, {CreatePetPage as CreatePetComponent, ADD_PET_MUTATION } from '../CreatePetPage';

configure({ adapter: new Adapter() });

const mocks = [
    {
      request: {
        query: ADD_PET_MUTATION,
        variables: { 
			petName: 'Dingo',  
		    petAge: 2,
		    petWeight: 2,
		    petSpecies: 'Dog',
		    petBreed: 'Mutt',
		    ownerFname: 'Steve',
		    ownerLname: 'Irwin'
        },
      },
      result: { data: { 
  		petName: 'Dingo',
    	ownerFname: 'Steve',
    	ownerLname: 'Irwin'
       } 
	  },
    },
  ];

describe('CreatePetPage', () => {
	it('renders without error', () => {
		const div = document.createElement('div');
	  	ReactDOM.render(
	    	<MockedProvider mocks={[]}>
	  			<CreatePetPage />
			</MockedProvider>, div
		)
	  ReactDOM.unmountComponentAtNode(div);
	});

	it('submits form successfully', () => {
	  	const component = mount(
	    	<MockedProvider mocks={mocks} removeTypename>
	  			<CreatePetPage />
			</MockedProvider>)

	    component.setState({petName: 'Dingo',  
		    age: 2,
		    weight: 2,
		    species: 'Dog',
		    breed: 'Mutt',
		    ownerFname: 'Steve',
		    ownerLname: 'Irwin'
		})

  		const button = component.find('button');

  		button.simulate('click'); // fires the mutation

		expect(component.state('petName')).toBe('')

	})

})
