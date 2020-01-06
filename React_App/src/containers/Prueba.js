import React, { useState } from 'react';
import { Paper, List, Grid, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import loginBg from '../resources/images/loginBg.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  grid: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${loginBg})`,
    [theme.breakpoints.down('md')]: {
      backgroundPosition: '25% 75%'
    },
    [theme.breakpoints.up('xl')]: {
      backgroundPosition: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: `url(${loginBg})`
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
    padding: theme.spacing(4),
    opacity: 0.9
  },
  item: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }
}));

const Test = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();

    console.log(data);

    if (Array.isArray(data.results)) {
      setUsers(data.results);
    }
  });

  return (
    <List>
      <Grid className={classes.grid}>
        <Paper className={classes.paper}>
          {users.map(({ id, name, email, picture }) => (
            <div key={id}>
              <img src={picture.thumbnail} /> {name.first} {name.last}
              <p>{email}</p>
            </div>
          ))}
        </Paper>
      </Grid>
    </List>
  );
};

export default Test;
