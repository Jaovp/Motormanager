import {
    Create,
    TextInput,
    SimpleForm,
    ListProps,
} from 'react-admin';
import { phoneNumberFormat } from '../../components/Formatters';
import { DocInput, TipoInput } from '../../components/DocInput';
import { Cliente } from '../../types';

const ClientesCreate: React.FC < ListProps > = () => {
    

    return (
        <Create<Cliente> title="Cadastro de Cliente" >
            <SimpleForm>
                <TextInput source="nome" format={(value) => value && value.charAt(0).toUpperCase() + value.slice(1)}/>
                <TextInput source="email" />
                <TextInput source="telefone" format={phoneNumberFormat} />
                <TipoInput />
                <DocInput />
            </SimpleForm>
        </Create>
    );
};

export default ClientesCreate;
