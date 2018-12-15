import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { spy } from 'sinon';
import wait from 'waait';


import CreatePetMutation, {CreatePetMutation as CreatePet, ADD_PET_MUTATION } from '../CreatePetMutation';

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


describe('CreatePetMutation', () => {
	it('renders without error', () => {
		const div = document.createElement('div');
	  	ReactDOM.render(
	    	<MockedProvider mocks={[]}>
	  			<CreatePetMutation />
			</MockedProvider>, div
		)
	  ReactDOM.unmountComponentAtNode(div);
	});

	it('submits form successfully', async () => {
		const div = document.createElement('div');
	  	const component = mount(
	    	<MockedProvider mocks={mocks} addTypename>
	  			<CreatePetMutation />
			</MockedProvider>, div)
  		
	    component.find('CreatePetMutation').setState({petName: 'Dingo',  
		    age: '2',
		    weight: '2',
		    species: 'Dog',
		    breed: 'Mutt',
		    ownerFname: 'Steve',
		    ownerLname: 'Irwin'
		})
	    
  		component.find('button').simulate('click')// fires the mutation

  		await wait(10)
		
		expect( component.find('CreatePetMutation').state('petName')).toBe('')
	  ReactDOM.unmountComponentAtNode(div);

	})

})
