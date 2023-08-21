import { Create, ListProps, NumberInput, SimpleForm, TextInput } from "react-admin"
import { Servico } from "../../types";

const ServicosCreate: React.FC< ListProps > = () => {
    return(
        <Create<Servico> title="Cadastro de Serviço">
            <SimpleForm>
                <TextInput source="nome" />
                <NumberInput source="valor" />
            </SimpleForm>
        </Create>
    )
}

export default ServicosCreate;