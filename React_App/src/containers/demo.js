import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button, Container } from '@material-ui/core';

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
  },
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

export default function InteractiveList() {
  const [users, setUsers] = useState([]);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();

    console.log(data);

    if (Array.isArray(data.results)) {
      setUsers(data.results);
    }
  });
  const classes = useStyles();
  const [dense] = React.useState(false);

  return (
    <Container className={classes.container} maxWidth={false}>
      <div className={classes.root}>
        <Grid className={classes.grid}>
          <Typography variant='h6' className={classes.title}>
            Usuarios
          </Typography>
          <div className={classes.demo}>
            <List
              height={150}
              itemCount={1000}
              itemSize={35}
              width={300}
              dense={dense}
            >
              {generate(
                <ListItem>
                  <ListItemText
                    primary={users.map(({ id, name, email, picture }) => (
                      <div key={id}>
                        <img src={picture.thumbnail} /> {name.first} {name.last}
                        <p>{email}</p> <Button />
                      </div>
                    ))}
                  />
                </ListItem>
              )}
            </List>
          </div>
        </Grid>{' '}
      </div>
    </Container>
  );
}
