import {
    Create,
    TextInput,
    SimpleForm,
} from 'react-admin';
import { phoneNumberFormat } from '../../components/Formatters';
import { DocInput, TipoInput } from '../../components/DocInput';

const ClientesCreate = (props: any) => {
    

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="nome" />
                <TextInput source="email" />
                <TextInput source="telefone" format={phoneNumberFormat} />
                <TipoInput />
                <DocInput />
            </SimpleForm>
        </Create>
    );
};

export default ClientesCreate;
