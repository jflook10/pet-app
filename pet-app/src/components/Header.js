import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const styles = {
  root: {
    flexGrow: 1,
  },
};

export class Header extends Component {
	render() {
		//const { classes } = this.props;
		return (
			<div>
			<AppBar position="static" color="default">
        <Toolbar>
        <Typography variant="h1" gutterBottom>
        	Pet App
      	</Typography>
          <ul>
			<li>Home</li>
			<li>Add Pet</li>		
			</ul>
        </Toolbar>
      </AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Header)