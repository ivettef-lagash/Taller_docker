import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import guardar from '../actions/guardar';

import SimpleTable from './Prueba2';

const About = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();

    console.log(data);

    if (Array.isArray(data.results)) {
      // setUsers(data.results);
      dispatch(guardar.guardarTotal(data.results));
    }
  });

  return (
    <div>
      <SimpleTable />
    </div>
  );
};

export default About;
