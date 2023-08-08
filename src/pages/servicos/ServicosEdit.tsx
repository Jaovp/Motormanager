import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { Servico } from '../../types';

const ServicosEdit: React.FC = (props) => {
    return (
        <Edit<Servico> {...props}>
            <SimpleForm>
                <TextInput source="nome" />
                <NumberInput source="valor" />
            </SimpleForm>
        </Edit>
    );
};

export default ServicosEdit;
