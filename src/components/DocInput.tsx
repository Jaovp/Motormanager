import { RadioButtonGroupInput, TextInput } from "react-admin";
import { cnpjFormat, cpfFormat } from "./Formatters";
import { useWatch } from 'react-hook-form';


export const TipoInput = (props: any) => {
    const tipo = useWatch({
        control: props.control,
        name: 'tipo',
        defaultValue: 'F',
    });

    return (
        <RadioButtonGroupInput
            source="tipo"
            optionText="label"
            
            choices={[
                { id: 'F', label: 'Fisico' },
                { id: 'J', label: 'Juridico' },
            ]
            }
        />
    );
};

export const DocInput = (props: any) => {
    const tipo = useWatch({
        control: props.control,
        name: 'tipo',
        defaultValue: 'F',
    });

    return (
        <TextInput
            className="docInput"
            label={tipo === 'F' ? 'CPF' : 'CNPJ'}
            source="doc"
            format={tipo === 'F' ? cpfFormat : cnpjFormat}
            disabled={tipo !== 'F' && tipo !== 'J'}
        />
    );
};