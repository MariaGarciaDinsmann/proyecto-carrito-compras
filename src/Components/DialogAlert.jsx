import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from "react-router-dom";

export default function DialogAlert({ handleClose, open, mensaje }) {    

    return (
        <div>           
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"FELICITACIONES"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" >
                        
                        {                      
                            mensaje                   
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/cart">
                        <Button onClick={handleClose}>Ir al carrito</Button>
                    </Link>
                    <Link to="/">
                        <Button onClick={handleClose} autoFocus>
                            Seguir comprando
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}