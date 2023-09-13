import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, required } from 'react-admin';
import { Servico } from '../../types';

const ServicosEdit: React.FC = (props) => {
    return (
        <Edit<Servico> {...props} title="Edição de Serviço" redirect = "list">
            <SimpleForm>
                <TextInput source="nome" validate={required()}/>
                <NumberInput source="valor" validate={required()}/>
            </SimpleForm>
        </Edit>
    );
};

export default ServicosEdit;
