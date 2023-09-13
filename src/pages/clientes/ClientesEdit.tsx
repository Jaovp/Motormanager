import { Edit, SimpleForm, TextInput, required } from "react-admin"
import { phoneNumberFormat } from "../../components/Formatters"
import { DocInput, TipoInput } from "../../components/DocInput"
import { Cliente } from "../../types"

const ClientesEdit: React.FC = (props: any) => {
    return(
    <Edit<Cliente> {...props} title="Edição de Cliente" redirect = "list">
        <SimpleForm>
            <TextInput source="nome" validate={required()}/>
            <TextInput source="email" validate={required()}/>
            <TextInput source="telefone" format={phoneNumberFormat} validate={required()}/>
            <TipoInput />
            <DocInput />
        </SimpleForm>
    </Edit>
    )
}

export default ClientesEdit;