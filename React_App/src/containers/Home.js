import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Button, Container, Grid, Paper } from '@material-ui/core';

import { ABOUT, COUNTER } from '../routes/paths';

import useStyles from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container className={classes.Container} maxWidth={false}>
      <Grid className={classes.grid}>
        <Paper className={classes.paper}>
          <h1>Trabajo Final</h1>
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            onClick={handleNavigate(ABOUT)}
          >
            RANDOM USERS
          </Button>
          <Button
            className={classes.button}
            variant='contained'
            color='secondary'
            onClick={handleNavigate(COUNTER)}
          >
            USERS
          </Button>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Home;
