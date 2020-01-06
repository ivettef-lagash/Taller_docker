import { createReducer } from 'reduxsauce';
import produce from 'immer';

import AlertDialog from '../containers/edit';
import {
  GUARDAR_PERSONA,
  GUARDAR_TOTAL,
  DELETE_USERS,
  EDIT_USERS
} from '../actions/guardar';

const INITIAL_STATE = {
  personEdit: null,
  personasGuardadas: [],
  personasTotal: [],
  deleteUsers: [],
  editUsers: []
};

const guardarTotal = produce((draft, { data }) => {
  draft.personasTotal = data;
  console.log(data);
});
const guardarPersona = produce((draft, { index }) => {
  draft.personasGuardadas.push(draft.personasTotal[index]);
  draft.personasTotal = draft.personasTotal.filter((v, i) => index !== i);
  console.log(draft.personasGuardadas);
});

const deleteUsers = produce((draft, { index }) => {
  draft.deleteUsers.push(draft.personasGuardadas[index]);
  draft.personasGuardadas = draft.personasGuardadas.filter(
    (v, i) => index !== i
  );
  console.log(draft.deleteUsers);
});

const editUsers = produce((draft, { data }) => {
  console.log(data);
  draft.personEdit = data;
});

const reducer = createReducer(INITIAL_STATE, {
  [GUARDAR_PERSONA]: guardarPersona,
  [GUARDAR_TOTAL]: guardarTotal,
  [DELETE_USERS]: deleteUsers,
  [EDIT_USERS]: editUsers
});

export default reducer;
