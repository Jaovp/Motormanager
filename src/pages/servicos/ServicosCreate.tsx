import { Create, ListProps, NumberInput, SimpleForm, TextInput, required } from "react-admin"
import { Servico } from "../../types";

const ServicosCreate: React.FC< ListProps > = () => {
    return(
        <Create<Servico> title="Cadastro de Serviço" redirect = "list">
            <SimpleForm>
                <TextInput source="nome" validate={required()}/>
                <NumberInput source="valor" validate={required()}/>
            </SimpleForm>
        </Create>
    )
}

export default ServicosCreate;