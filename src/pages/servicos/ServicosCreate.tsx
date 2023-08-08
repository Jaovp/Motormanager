import { Create, ListProps, NumberInput, SimpleForm, TextInput } from "react-admin"
import { Servico } from "../../types";

const ServicosCreate: React.FC< ListProps > = () => {
    return(
        <Create<Servico> >
            <SimpleForm>
                <TextInput source="nome" />
                <NumberInput source="valor" />
            </SimpleForm>
        </Create>
    )
}

export default ServicosCreate;