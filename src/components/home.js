import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MoodButton from "./mood";
import RandomMeal from "./randomMeal";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},

	title: {
		width: "100%",
		textAlign: "center",
		fontSize: "5rem",
		marginBottom: "50px",
		textAlign: "center",
		color: "#fff",
		animation: `$enterTop 1s ease-out`,
		textShadow: "2px 2px 4px  rgba(0, 0, 0, 0.4)",
	},

	buttons: {
		animation: `$enterLeft 1s ease-out`,
	},

	"@keyframes enterTop": {
		"0%": {
			opacity: 0,
			transform: "translateY(-100px)",
		},
		"80%": {
			transform: "translateY(15px)",
		},

		"100%": {
			opacity: 1,
			transform: "translateY(0px)",
		},
	},

	"@keyframes enterLeft": {
		"0%": {
			opacity: 0,
			transform: "translateX(-100px)",
		},
		"80%": {
			transform: "translateX(15px)",
		},

		"100%": {
			opacity: 1,
			transform: "translateX(0px)",
		},
	},
});

const HomePage = ({ toggleClick, handleMessage }) => {
	const classes = useStyles();
	return (
		<Grid
			container
			alignItems='center'
			direction='column'
			className={classes.root}
		>
			<Grid item xs={12} style={{ padding: "50px" }}>
				{" "}
				<Typography className={classes.title}> {handleMessage}</Typography>
			</Grid>
			<Grid item className={classes.buttons}>
				<MoodButton handleClick={toggleClick} />
			</Grid>
		</Grid>
	);
};

export default HomePage;
