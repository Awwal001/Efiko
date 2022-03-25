import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}





// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { update_profile } from '../../actions/profile';
// import { delete_account } from '../../actions/auth';

// const Dashboard = ({
    // delete_account,
    // update_profile,
    // first_name_global,
    // last_name_global,
    // phone_global,
    // city_global
// }) => {
    // const [formData, setFormData] = useState({
        // first_name: '',
        // last_name: '',
        // phone: '',
        // city: ''
    // });

    // const { first_name, last_name, phone, city } = formData;

    // useEffect(() => {
        // setFormData({
            // first_name: first_name_global,
            // last_name: last_name_global,
            // phone: phone_global,
            // city: city_global
        // });
    // }, [first_name_global]);

    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // const onSubmit = e => {
        // e.preventDefault();

        // update_profile(first_name, last_name, phone, city);
    // };

    // return (
        // <div className='container'>
            // <h1 className='mt-3'>Welcome to your User Dashboard</h1>
            // <p className='mt-3 mb-3'>Update your user profile below:</p>
            // <form onSubmit={e => onSubmit(e)}>
                // <div className='form-group'>
                    // <label className='form-label' htmlFor='first_name'>First Name</label>
                    // <input
                        // className='form-control'
                        // type='text'
                        // name='first_name'
                        // placeholder={`${first_name_global}`}
                        // onChange={e => onChange(e)}
                        // value={first_name}
                    // />
                // </div>
                // <div className='form-group'>
                    // <label className='form-label mt-3' htmlFor='last_name'>Last Name</label>
                    // <input
                        // className='form-control'
                        // type='text'
                        // name='last_name'
                        // placeholder={`${last_name_global}`}
                        // onChange={e => onChange(e)}
                        // value={last_name}
                    // />
                // </div>
                // <div className='form-group'>
                    // <label className='form-label mt-3' htmlFor='phone'>Phone</label>
                    // <input
                        // className='form-control'
                        // type='text'
                        // name='phone'
                        // placeholder={`${phone_global}`}
                        // onChange={e => onChange(e)}
                        // value={phone}
                    // />
                // </div>
                // <div className='form-group'>
                    // <label className='form-label mt-3' htmlFor='city'>City</label>
                    // <input
                        // className='form-control'
                        // type='text'
                        // name='city'
                        // placeholder={`${city_global}`}
                        // onChange={e => onChange(e)}
                        // value={city}
                    // />
                // </div>
                // <button className='btn btn-primary mt-3' type='submit'>Update Profile</button>
            // </form>
            // <p className='mt-5'>
                // Click the button below to delete your user account:
            // </p>
            // <a
                // className='btn btn-danger'
                // href='#!'
                // onClick={delete_account}
            // >
                // Delete Account
            // </a>
        // </div>
    // )
// };

// const mapStateToProps = state => ({
    // first_name_global: state.profile.first_name,
    // last_name_global: state.profile.last_name,
    // phone_global: state.profile.phone,
    // city_global: state.profile.city,
// });

// export default connect(mapStateToProps, { 
    // delete_account,
    // update_profile
 // })(Dashboard);