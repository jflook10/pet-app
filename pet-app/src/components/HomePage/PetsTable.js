import React, { Component } from 'react';
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

export class PetsTable extends Component {
	render() {
	const { classes } = this.props;
		return (
			 <Paper className={classes.root}>
			<Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Pet Name</TableCell>
            <TableCell numeric>Age</TableCell>
            <TableCell>Species</TableCell>
            <TableCell numeric>Weight</TableCell>
            <TableCell>Owner First Name</TableCell>
            <TableCell>Owner Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">Freddy</TableCell>
            <TableCell numeric> 6</TableCell>
            <TableCell>Dog</TableCell>
            <TableCell numeric>12 lbs</TableCell>
            <TableCell>J</TableCell>
            <TableCell>Flay</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </Paper>
		);
	}
}

export default withStyles(styles)(PetsTable)