import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		marginBottom: "50px",
	},

	btn: {
		padding: "20px 30px",
		maxWidth: "150px",
		fontWeight: "bold",
		transition: "all 0.5s ease",
		marginLeft: "20px",
		marginTop: "10px",
		textAlign: "center",
		"&:hover": {
			transform: "translateY(-3px)",
			background: "#f50057",
			boxShadow: "0px 5px 10px 2px rgba(0,0,0,0.3)",
		},
		"&:active": {
			transform: "translateY(-1px)",
			boxShadow: "0px 5px 5px 2px rgba(0,0,0,0.3)",
		},
	},
});

const MoodButton = (props) => {
	const moods = [
		"Quite Lethargic",
		"Pretty Optimistic",
		"Rather Naughty",
		"Somewhat Predatory",
	];

	const classes = useStyles();

	return (
		<React.Fragment>
			<Grid
				container
				justify='center'
				style={{ width: "100%" }}
				className={classes.root}
			>
				{moods.map((mood) => (
					<Grid container item xs={12} sm={3} justify='center'>
						<Button
							className={classes.btn}
							color='primary'
							variant='contained'
							key={mood}
							component={Link}
							to={mood}
							onClick={() => props.handleClick()}
						>
							{mood}
						</Button>
					</Grid>
				))}
			</Grid>
		</React.Fragment>
	);
};

export default MoodButton;
