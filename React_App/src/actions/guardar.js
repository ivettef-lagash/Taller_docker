import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  guardarPersona: ['index'],
  guardarTotal: ['data'],
  deleteUsers: ['index'],
  editUsers: ['data']
});

const { guardarPersona, guardarTotal, deleteUsers, editUsers } = Creators;
const { GUARDAR_PERSONA, GUARDAR_TOTAL, DELETE_USERS, EDIT_USERS } = Types;

export { GUARDAR_PERSONA, GUARDAR_TOTAL, DELETE_USERS, EDIT_USERS };
export default { guardarPersona, guardarTotal, deleteUsers, editUsers };
