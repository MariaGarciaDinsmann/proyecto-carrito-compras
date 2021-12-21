import * as React from 'react';
import { useState } from 'react';
import BasicTextFields from './BasicTextFields';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Services from '../services/services'
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Joi from 'joi';
import DialogAlertForm from './DialogAlertForm';


export default function Form() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { productosAgregados, totalPrice, setOrderID, clear } = useContext(CartContext)

    const [checkMail, setCheckMail] = useState(false);

    const [formValues, setFormValues] = useState({
        nombre: "",
        mail: "",
        telefono: ""
    });

    const [message, setMessage] = useState("");

    let navigate = useNavigate();

    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
        console.log(formValues);
    }

    const handleCheck = (event) => {
        setCheckMail(event.target.value === formValues.mail);
    }

    const validate = (object) => {
        let errorKey;
        let message = '';

        const schema = Joi.object({
            buyer: Joi.object({
                nombre: Joi.string().required(),
                mail: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'ar'] } }),
                telefono: Joi.string().required().regex(/^[0-9]{10}$/)
            }),
            items: Joi.array().min(1),
            total: Joi.number().required()
        }).options({ abortEarly: false });

        const { error } = schema.validate(object);
        if (error) {
            message = 'Invalidos: '
            errorKey = error.details.map(e => {
                message += ` ${e.context.key === 'item' ? '\n No hay productos agregados' : e.context.key} `;
                return e.context.key;
            })
        }

        if (!checkMail && !error)
            return { errorKey: '0', message: 'chequeo mail' }

        return { errorKey, message };
    }

    const checkOut = () => {
        setOrderID();
        const order = {
            buyer: formValues,
            items: productosAgregados,
            total: totalPrice()
        }

        const error = validate(order);

        if (!error.errorKey) {
            Services.addOrder(order).then(({ id }) => {
                setOrderID(id);

                productosAgregados.forEach(producto => {
                    const newStock = producto.stock - producto.cantidad;
                    Services.updateItem(producto.id, newStock);
                })

                clear();
            });

            navigate('/congrats', { replace: true })

        }
        else {
            setMessage(error.message);
            handleClickOpen();
        }
    }

    return (
        <>
            <Typography>Para poder finalizar tu compra deberás completar el fomulario:</Typography>
            <BasicTextFields name={'nombre'} label={"Nombre y apellido"} funcion={handleChange} helperText={"Ejemplo: Juan Méndez"} />
            <BasicTextFields name={'mail'} label={"Mail"} funcion={handleChange} helperText={"Ejemplo: nombre@dominio.com"} />
            <BasicTextFields name={'checkMail'} label={"Verifique su mail"} funcion={handleCheck} helperText={"Ejemplo: nombre@dominio.com"} />
            <BasicTextFields name={'telefono'} label={"Teléfono"} funcion={handleChange} helperText={"Ejemplo: 1144446666"} />
            <Button variant="contained" color="secondary" onClick={checkOut} sx={{ pr: 2, width: '-webkit-fill-available', mt: 4 }}>
                Finalizar mi compra
            </Button>

            <DialogAlertForm handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} message={message} />

        </>
    );
}