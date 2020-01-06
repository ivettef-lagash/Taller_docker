import Button from '@material-ui/core/Button';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from 'react-hook-form';

const AlertDialog = ({ open, onClose, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id='alert-dialog-title'>Editar Usuario</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <input
                type='text'
                placeholder='Nombre'
                name='First name'
                ref={register({ required: true, maxLength: 80 })}
              />
              <div>
                <input
                  type='text'
                  placeholder='Apellido'
                  name='Last name'
                  ref={register({ required: true, maxLength: 100 })}
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Email'
                  name='Email'
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onSubmit} color='primary'>
              Guardar
            </Button>
            <Button type='sumbit' color='primary' autoFocus>
              Cancelar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
