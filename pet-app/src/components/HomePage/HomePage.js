import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import '../../App.css';
import PetsTable from './PetsTable'


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
      	<Typography variant="h2" gutterBottom>
        	Current Pets
      	</Typography>
      	<PetsTable />
      </div>
    );
  }
}

export default HomePage;