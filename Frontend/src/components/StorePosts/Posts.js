// import React from 'react';
// import Header from '../UI/Header/Header';
// import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
// import CardMedia from "@material-ui/core/CardMedia";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
  // example: {
    // color: "#ccc",
  // },
  // cardGrid: {
    // paddingBottom: theme.spacing(8),
  // },
  // card: {
    // height: "100%",
    // display: "flex",
    // flexDirection: "column",
    // borderRadius: "0",
  // },
  // cardMedia: {
    // paddingTop: "140%",
  // },
// }));



// const Posts = (props) => {
	// const { posts } = props;
	// const classes = useStyles();
	// if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	// return (
		// <React.Fragment>
			// <Header />
			// <Container className={classes.cardGrid} maxWidth="lg">
			  // <Grid container spacing={2}>
				// {posts.map((post) => (
				  // <Link >
					// <Grid item xs={6} sm={4} md={3}>
					  // <Card className={classes.card} elevation={0}>
					  // <CardMedia
							// className={classes.cardMedia}
							// image={post.product_image[0].image}
							// title="Image title"
							// alt={post.product_image[0].alt_text}
						  // />
						// <CardContent>
						  // <Typography gutterBottom component="p">
							// {post.title}
						  // </Typography>
						  // <Box component="p" fontSize={16} fontWeight={900}>
							// £{post.regular_price}
						  // </Box>
						// </CardContent>
					  // </Card>
					// </Grid>
				  // </Link>
				// ))}
			  // </Grid>
			// </Container>
		// </React.Fragment>
	// );
// };
// export default Posts;


import React from 'react';
import Header from '../StoreComps/components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const Posts = (props) => {
	const { posts } = props;
	const classes = useStyles();
	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<React.Fragment>
			<Header />
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<Card className={classes.card}>
									<Link
										color="textPrimary"
										href={'post/' + post.slug}
										className={classes.link}
									>
										<CardMedia
											className={classes.cardMedia}
											image={post.product_image[0].image}
											title="Image title"
											alt={post.product_image[0].alt_text}
										  />
									</Link>
									<CardContent>
									  <Typography gutterBottom component="p">
										{post.title}
									  </Typography>
									  <Box component="p" fontSize={16} fontWeight={900}>
										£{post.regular_price}
									  </Box>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Posts;