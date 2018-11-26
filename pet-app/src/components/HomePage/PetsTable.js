import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const PETS_QUERY = gql`
{
  pets{
    petName
    petAge
    petWeight
    petBreed
    petSpecies
    ownerFname
    ownerLname
  }
}
`

export class PetsTable extends Component {
	renderTableRows = () => {
		const { pets } = this.props

		return pets.map((pet, index) => {
			return(
			<TableRow key={index}>
	            <TableCell component="th" scope="row">{pet.petName}</TableCell>
	            <TableCell numeric> {pet.petAge}</TableCell>
	            <TableCell>{pet.petSpecies}</TableCell>
	            <TableCell>{pet.petBreed}</TableCell>
	            <TableCell numeric>{pet.petWeight}</TableCell>
	            <TableCell>{pet.ownerFname}</TableCell>
	            <TableCell>{pet.ownerLname}</TableCell>
          	</TableRow>
			)
		})
	}

	render() {
	const { classes } = this.props;
		return (
			 <Paper className={classes.root}>
			<Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Pet Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Species</TableCell>
            <TableCell>Breed</TableCell>
            <TableCell>Weight (lbs)</TableCell>
            <TableCell>Owner First Name</TableCell>
            <TableCell>Owner Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.renderTableRows()}
        </TableBody>
      </Table>
      </Paper>
		);
	}
}

export class PetQuery extends Component {
	render(){
		const { classes } = this.props
		return (
			<Query query={PETS_QUERY}>
	            {({loading, data}) => {
	              if(loading) return "Loading..."
	              const { pets } = data;
	              return <PetsTable pets={pets} classes = {classes}/>
	            }}  
            </Query>
      	)
	}
}

export default withStyles(styles)(PetQuery)