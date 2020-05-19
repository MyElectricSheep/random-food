import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	btn: {
		padding: "20px 30px",
		fontWeight: "bold",
		transition: "all 0.5s ease",
		marginLeft: "20px",
		marginTop: "10px",
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
			{moods.map((mood) => (
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
			))}
		</React.Fragment>
	);
};

export default MoodButton;
