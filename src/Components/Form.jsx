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


export default function Form() {

    const { productosAgregados, totalPrice, setOrderID, clear } = useContext(CartContext)

    const [formValues, setFormValues] = useState({
        name: "",
        mail: "",
        phone: ""
    });

    let navigate = useNavigate();

    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
        console.log(formValues);
    }

    const validate = (object) => {
        let errorKey;
        let menssage = '';

        const schema = Joi.object({
            buyer: Joi.object({
                name: Joi.string().required(),
                mail: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'ar'] } }),
                phone: Joi.string().required().regex(/^[0-9]{10}$/)
            }),
            items: Joi.array().min(1),
            total: Joi.number().required()
        }).options({ abortEarly: false });

        const { error } = schema.validate(object);
        if (error) {
            menssage = 'Invalidos: '
            errorKey = error.details.map(e => {
                menssage += ` ${e.context.key === 'item' ? '\n No hay productos agregados' : e.context.key} `;
                return e.context.key;
            })
        }

        return { errorKey, menssage };
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
            alert(error.menssage);
        }
    }

    return (
        <>
            <Typography>Para poder finalizar tu compra deberás completar el fomulario:</Typography>
            <BasicTextFields label={"name"} funcion={handleChange} />
            <BasicTextFields label={"mail"} funcion={handleChange} />
            <BasicTextFields label={"phone"} funcion={handleChange} />
            <Button variant="contained" color="secondary" onClick={checkOut} sx={{ pr: 2, width: '-webkit-fill-available', mt: 4 }}>
                Finalizar mi compra
            </Button>

        </>
    );
}