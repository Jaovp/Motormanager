import { Edit, SimpleForm, TextInput } from "react-admin"
import { phoneNumberFormat } from "../../components/Formatters"
import { DocInput, TipoInput } from "../../components/DocInput"
import { Cliente } from "../../types"

const ClientesEdit: React.FC = (props: any) => {
    return(
    <Edit<Cliente> {...props} title="Edição de Cliente">
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="email" />
            <TextInput source="telefone" format={phoneNumberFormat} />
            <TipoInput />
            <DocInput />
        </SimpleForm>
    </Edit>
    )
}

export default ClientesEdit;