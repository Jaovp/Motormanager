import React from "react";
import { TextInput, required, useInput } from "react-admin";
import TextField from '@mui/material/TextField';

const phoneNumberFormat = (num: string) => {
    if (!num) return "";

    // Remove caracteres não numéricos do número de telefone
    let newNum = num.replace(/\D/g, '');

    let x;
    if (newNum.length <= 2) {
        x = newNum;
    } else if (newNum.length <= 7) {
        x = `(${newNum.slice(0, 2)}) ${newNum.slice(2, 7)}`;
    } else {
        x = `(${newNum.slice(0, 2)}) ${newNum.slice(2, 7)}-${newNum.slice(7, 11)}`;
    }
    return x;
};


const PhoneInput = (props: any) => {
    return(
        <TextInput 
        className="location-input" 
        label="Telefone" 
        source="telefone" 
        format={phoneNumberFormat}
        />
    )
    };

export default PhoneInput;
