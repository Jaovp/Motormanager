import {
    Create,
    TextInput,
    SimpleForm,
    ListProps,
    required,
} from 'react-admin';
import { phoneNumberFormat } from '../../components/Formatters';
import { DocInput, TipoInput } from '../../components/DocInput';
import { Cliente } from '../../types';

const ClientesCreate: React.FC < ListProps > = () => {
    

    return (
        <Create<Cliente> title="Cadastro de Cliente" redirect = "list" >
            <SimpleForm>
                <TextInput source="nome" format={(value) => value && value.charAt(0).toUpperCase() + value.slice(1)} validate={required()}/>
                <TextInput source="email" validate={required()} />
                <TextInput source="telefone" format={phoneNumberFormat} validate={required()} />
                <TipoInput />
                <DocInput />
            </SimpleForm>
        </Create>
    );
};

export default ClientesCreate;
