import React, { Component } from "react";
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'


//import PropTypes from 'prop-types';

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const styles = theme => ({
	formContainer: {
		display: "flex",
		flexDirection: "column",
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200
	},
	dense: {
		marginTop: 19
	},
	menu: {
		width: 200
	},
	button: {
    	margin: theme.spacing.unit,
  	},
});

const ADD_PET_MUTATION = gql`mutation createPet(
	$petName: String!,  
	$petName: String!,
    $petAge: Int!,
    $petWeight: Int!,
    $petSpecies: String!,
    $petBreed: String!,
    $ownerFname: String!,
    $ownerLname: String!) {
  createPet(data:{
    status: PUBLISHED
    petName: $petName
    petAge: $petAge
    petWeight: $petWeight
    petSpecies: $petSpecies
    petBreed: $petBreed
    ownerFname: $ownerFname
    ownerLname: $ownerLname
    
  }){
    petName
    ownerFname
    ownerLname
  }
}`

export class CreatePetPage extends Component {
	state = {
		petName: "",
		age: "",
		species: "",
		breed: "",
		weight: "",
		ownerFN: "",
		ownerLN: ""
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};

	handleSubmit = e => {
		console.log("GOT button")
		e.preventDefault()

	}

	render() {
		const { classes } = this.props;
		const { petName, age, species, breed, weight, ownerFname, ownerLname } = this.state
		return (
			<div>
				<Typography variant="h2" gutterBottom>
					Add a Pet the Registry
				</Typography>
				<Mutation
					mutation={ADD_PET_MUTATION}
					variables={{
					    petName,
					    petAge: age,
					    petWeight: weight,
					    petSpecies: species,
					    petBreed: breed,
					    ownerFname,
					    ownerLname
					}}
				>
				{createPet => (
					<form
						className={classes.formContainer}
						noValidate
						autoComplete="off"
						onSubmit={e => {
							console.log("GOT here")
							e.preventDefault()
							createPet().then(()=> {
								this.setState({
									petName: "",
									age: "",
									species: "",
									breed: "",
									weight: "",
									ownerFN: "",
									ownerLN: ""
								})
							}).catch(e => {
								console.log(e, "ERROR")
							})
						}}
					>
						<TextField
							id="petApp-create-petName"
							label="Pet Name"
							className={classes.textField}
							value={this.state.petName}
							onChange={this.handleChange("petName")}
							margin="normal"
						/>
						<TextField
				          id="petApp-create-petSpecies"
				          select
				          label="Pet Species"
				          className={classes.textField}
				          value={this.state.species}
				          onChange={this.handleChange('species')}
				          SelectProps={{
				            MenuProps: {
				              className: classes.menu,
				            },
				          }}
				          helperText="Please select the correct pet species"
				          margin="normal"
				        >
				            <MenuItem value="Dog">
				              Dog
				            </MenuItem>
				            <MenuItem value="Cat">
				              Cat
				            </MenuItem>
				            <MenuItem value="Lizard">
				              Snake
				            </MenuItem>
				            <MenuItem value="Hamster">
				              Rabbit
				            </MenuItem>
				            <MenuItem value="Other">
				              Other
				            </MenuItem>
				        </TextField>
				        <TextField
							id="petApp-create-breed"
							label="Pet Breed"
							value={this.state.breed}
							onChange={this.handleChange("breed")}
							type="string"
							className={classes.textField}
							InputLabelProps={{
								shrink: true
							}}
							margin="normal"
						/>
						<TextField
							id="petApp-create-age"
							label="Pet Age"
							value={this.state.age}
							onChange={this.handleChange("age")}
							type="number"
							className={classes.textField}
							InputLabelProps={{
								shrink: true
							}}
							margin="normal"
						/>
						<TextField
							id="petApp-create-weight"
							label="Pet Weight"
							value={this.state.weight}
							onChange={this.handleChange("weight")}
							type="number"
							className={classes.textField}
							InputLabelProps={{
								shrink: true
							}}
							margin="normal"
						/>
						<TextField
							id="petApp-create-ownerFN"
							label="Owner First Name"
							className={classes.textField}
							value={this.state.ownerFN}
							onChange={this.handleChange("ownerFN")}
							margin="normal"
						/>
						<TextField
							id="petApp-create-ownerLN"
							label="Owner Last Name"
							className={classes.textField}
							value={this.state.ownerLN}
							onChange={this.handleChange("ownerLN")}
							margin="normal"
						/>
						<div>
							<Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
					        	Submit
				        	</Button>
						</div>
					</form>
				)}
				</Mutation>
			</div>
		);
	}
}



export default withStyles(styles)(CreatePetPage);
