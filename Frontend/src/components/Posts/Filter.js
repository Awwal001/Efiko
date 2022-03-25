import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
//MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import axiosInstance from '../../axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}


const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});


export default function Filter() {
  const classes = useStyles();
  const [data, setData] = useState({
		posts: [],
	});

	useEffect(() => {
		axiosInstance.get(`/universities`).then((res) => {
			setData({
				posts: res.data,
			});
			console.log(res.data);
		});
	}, [setData]);

  return (
	<Container component="main" maxWidth="md">
		<h1 className="text-center">Efiko.ng</h1>
		<h2 className="text-center">Streamline your search below</h2>
		<Autocomplete
		  id="country-select-demo"
		  style={{ width: 300 }}
		  options={data.posts}
		  classes={{
			option: classes.option,
		  }}
		  autoHighlight
		  getOptionLabel={(option) => option.name}
		  renderOption={(option) => (
			<Link to={`/university/${option._id}`}>
			  {option.name}
			</Link>
		  )}
		  renderInput={(params) => (
			<TextField
			  {...params}
			  label="Choose a university"
			  variant="outlined"
			  inputProps={{
				...params.inputProps,
				autoComplete: 'new-password', // disable autocomplete and autofill
			  }}
			/>
		  )}
		/>
	</Container>
  );
}
