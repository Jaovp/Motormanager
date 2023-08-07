import { Edit, SimpleForm, TextInput } from "react-admin"
import { phoneNumberFormat } from "../../components/Formatters"
import { DocInput, TipoInput } from "../../components/DocInput"

const ClientesEdit = (props: any) => {
    return(
    <Edit {...props}>
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