import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useParams } from 'react-router-dom';
//MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

function Single({ match, history }) {
	const { _id } = useParams();
	const classes = useStyles();

	const [data, setData] = useState({
		posts: [],
	});

	useEffect(() => {
		axiosInstance.get(`/${match.params.id}`).then((res) => {
			setData({
				posts: res.data,
			});
			console.log(res.data);
		});
	}, [setData]);

	return (
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}> </div>{' '}
			<div className={classes.heroContent}>
				<Container maxWidth="sm">
					<img src={data.posts.image} alt={data.posts.name} />
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						{data.posts.name}{' '}
					</Typography>{' '}
					<Typography
						variant="h5"
						align="center"
						color="textSecondary"
						paragraph
					>
						{data.posts.description}{' '}
					</Typography>{' '}
				</Container>{' '}
			</div>{' '}
		</Container>
	);
}

export default Single;