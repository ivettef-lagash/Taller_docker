import { useDispatch } from 'react-redux';

import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar, Grid, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import guardar from '../actions/guardar';
import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
});

export default function SimpleTable() {
  const { personasTotal } = useSelector(({ list }) => list);

  console.log('personasTotal', personasTotal);
  const dispatch = useDispatch();
  const handleGuardar = useCallback(
    index => () => dispatch(guardar.guardarPersona(index)),
    [dispatch]
  );

  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();

    console.log(data);

    if (Array.isArray(data.results)) {
      setUsers(data.results);

      dispatch(guardar.guardarTotal(data.results));
    }
  });

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align='left'>Nombre </TableCell>
            <TableCell align='left' />
          </TableRow>
        </TableHead>
        <TableBody>
          {personasTotal.map((user, index) => (
            <TableRow key={user.login.uuid}>
              <TableCell align='left'>
                <Avatar src={user.picture.thumbnail} alt='Avatar' />
              </TableCell>
              <TableCell align='left'>
                <Grid>
                  <Grid>
                    {user.name.first} {user.name.last}
                  </Grid>
                  <Grid>{user.email}</Grid>
                </Grid>
              </TableCell>
              <TableCell align='right'>
                <Button variant='outlined' onClick={handleGuardar(index)}>
                  Guardar
                </Button>
              </TableCell>
              <TableCell align='right'>
                <Button variant='outlined' onClick={handleGuardar(index)}>
                  Guardar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
