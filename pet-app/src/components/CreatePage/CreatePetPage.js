import React, { Component } from "react";
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

export class CreatePetPage extends Component {
	state = {
		petName: "",
		age: "",
		species: "",
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
		e.preventDefault()
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Typography variant="h2" gutterBottom>
					Add a Pet the Registry
				</Typography>
				<form
					className={classes.formContainer}
					noValidate
					autoComplete="off"
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
			              Lizard
			            </MenuItem>
			            <MenuItem value="Hamster">
			              Hamster
			            </MenuItem>
			            <MenuItem value="Other">
			              Other
			            </MenuItem>
			        </TextField>
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
			</div>
		);
	}
}

export default withStyles(styles)(CreatePetPage);
