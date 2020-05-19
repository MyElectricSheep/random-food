import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import cook from "../img/cook.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		marginTop: "10vh",
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
	img: {
		width: "300px",
		margin: "auto",
	},
	btn: {
		padding: "20px 30px",
		fontWeight: "bold",
		transition: "all 0.5s ease",
		"&:hover": {
			background: "#3f51b5",
			transform: "translateY(-3px)",
			boxShadow: "0px 5px 10px 2px rgba(0,0,0,0.3)",
		},
		"&:active": {
			transform: "translateY(-1px)",
			boxShadow: "0px 5px 5px 2px rgba(0,0,0,0.3)",
		},
	},
}));

export default function RandomMeal(props) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const ingredients = [];
	for (let i = 1; i <= 20; i++) {
		ingredients.push(i);
	}

	const history = useHistory();
	const { randomMeal } = props;
	const { handleText } = props;
	const meal = randomMeal[0];
	console.log(props);
	return (
		<Grid
			container
			justify='center'
			direction='column'
			style={{ marginBottom: "100px" }}
		>
			<img className={classes.img} src={cook} />
			<Grid item>
				<Typography
					variant='h2'
					style={{
						marginTop: "40px",
						color: "white",
						textShadow: "2px 2px 4px  rgba(0, 0, 0, 0.4)",
					}}
				>
					The "{props.match.params.id}" Meal{" "}
				</Typography>
			</Grid>
			<Grid container justify='center'>
				<Grid item>
					<Card className={classes.root}>
						<CardHeader
							avatar={
								<Avatar aria-label='recipe' className={classes.avatar}>
									R
								</Avatar>
							}
							action={
								<IconButton aria-label='settings'>
									<MoreVertIcon />
								</IconButton>
							}
							title={meal.strMeal}
							subheader='September 14, 2016'
						/>
						<CardMedia
							className={classes.media}
							image={meal.strMealThumb}
							title={meal.strMeal}
						/>
						<CardContent>
							<Typography variant='body2' color='textSecondary' component='p'>
								{`This impressive ${meal.strMeal} is a perfect party dish and a fun meal to
						cook for someone feeling "${props.match.params.id}" `}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label='add to favorites'>
								<FavoriteIcon />
							</IconButton>
							<IconButton aria-label='share'>
								<ShareIcon />
							</IconButton>
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded,
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label='show more'
							>
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout='auto' unmountOnExit>
							<CardContent>
								<Typography paragraph>Ingredients:</Typography>
								<Typography paragraph>
									{meal.strIngredient1 ? `📖${meal.strIngredient1}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient2 ? `📖${meal.strIngredient2}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient3 ? `📖${meal.strIngredient3}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient4 ? `📖${meal.strIngredient4}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient5 ? `📖${meal.strIngredient5}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient6 ? `📖${meal.strIngredient6}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient7 ? `📖${meal.strIngredient7}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient8 ? `📖${meal.strIngredient8}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient9 ? `📖${meal.strIngredient9}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient10 ? `📖${meal.strIngredient10}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient11 ? `📖${meal.strIngredient11}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient12 ? `📖${meal.strIngredient12}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient13 ? `📖${meal.strIngredient13}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient14 ? `📖${meal.strIngredient14}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient15 ? `📖${meal.strIngredient15}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient16 ? `📖${meal.strIngredient16}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient17 ? `📖${meal.strIngredient17}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient18 ? `📖${meal.strIngredient18}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient19 ? `📖${meal.strIngredient19}` : null}
								</Typography>
								<Typography paragraph>
									{meal.strIngredient20 ? `📖${meal.strIngredient20}` : null}
								</Typography>

								<Typography paragraph>{meal.strInstructions}</Typography>
							</CardContent>
						</Collapse>
					</Card>
				</Grid>
			</Grid>
			<Grid container justify='center'>
				<Grid item>
					<Button
						className={classes.btn}
						onClick={() => handleText(props.match.params.id)}
						style={{
							marginTop: "50px",
						}}
						variant='contained'
						color='secondary'
					>
						{" "}
						Choose a different mood
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}
