import { Create, NumberInput, RadioButtonGroupInput, ReferenceInput, ResourceComponentInjectedProps, SelectInput, SimpleForm, TextInput } from "react-admin";
import PhoneInput from "../../components/PhoneInput";

export const ClientesCreate = (props: ResourceComponentInjectedProps) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="email" />
            <PhoneInput source="telefone" />
            <RadioButtonGroupInput source="tipo" optionText="label" choices={[
                { id: 'F', label: 'Fisico' },
                { id: 'J', label: 'Juridico' },
            ]} />
        </SimpleForm>
    </Create>
);