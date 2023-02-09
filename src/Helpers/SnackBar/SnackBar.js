import React, {Component, useContext, useEffect, useState} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { CartTheme } from '../../Contexts/CartContext';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);
  const [alreayInCart, setAlreayInCart] = React.useState(false);

    const ctxCart = useContext(CartTheme)

//   const handleClick = () => {
//     setOpen(true);
//   };

  useEffect(()=>{
    if(ctxCart.snackBar){
        setOpen(true);
    }

    
    if(ctxCart.snackBar2){
        setAlreayInCart(true)
    }

  },[ctxCart.snackBar,ctxCart.snackBar2])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setAlreayInCart(false)
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your Product Added In Cart.
        </Alert>
      </Snackbar>
      <Snackbar open={alreayInCart} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Your Product Is Already In Cart.
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
    <Alert severity="success">This is a success message!</Alert> */}
    </>
   
  );
}