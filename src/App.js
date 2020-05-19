import React from "react";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch, useHistory } from "react-router-dom";
import RandomMeal from "./components/randomMeal";

import "./App.css";
import HomePage from "./components/home";

const useStyles = makeStyles({
	title: {
		fontSize: "4rem",
	},
});

function App() {
	const [data, setData] = useState([]);
	const [clicked, setClicked] = useState(false);
	const [message, setMessage] = useState({ text: "How Ya Feelin' Buddy?" });

	useEffect(() => {
		fetchData();
	}, [clicked]);

	const toggleClick = () => {
		setClicked(!clicked);
	};

	const handleText = (item) => {
		history.push("/");
		setMessage({
			text: `Hmm, not feeling "${item}"? No problemo. How do you actually feel?`,
		});
	};

	const fetchData = async () => {
		const data = await fetch(
			"https://www.themealdb.com/api/json/v1/1/random.php"
		)
			.then((res) => res.json())
			.then((res) => res.meals);

		setData(data);
		console.log(data);
	};
	const classes = useStyles();
	const history = useHistory();
	return (
		<Grid
			style={{ height: "100vh" }}
			container
			justify='center'
			alignItems='center'
		>
			<Grid container justify='center'>
				<Grid item>
					<Route
						exact
						path='/'
						render={(props) => (
							<HomePage
								{...props}
								toggleClick={toggleClick}
								handleMessage={message.text}
							/>
						)}
					/>
					<Route
						path='/:id'
						render={(props) => (
							<RandomMeal
								{...props}
								randomMeal={data}
								handleText={handleText}
							/>
						)}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;
