import { Create, NumberInput, ReferenceInput, SimpleForm, TextInput, maxLength, maxValue, minLength, minValue, required } from "react-admin";
import { Veiculo } from "../../types";
import { placaFormat } from "../../components/Formatters";

const currentYear = new Date().getFullYear();

const VeiculosCreate: React.FC = () => {
    return (
        <Create<Veiculo> >
            <SimpleForm>
            <TextInput source="placa" format={placaFormat} validate={[
                    required(),
                    minLength(7, 'A placa deve ter 7 caracteres'),
                    maxLength(7, 'A placa deve ter 7 caracteres')
                    ]} />
                <TextInput source="cor" />
                <TextInput source="modelo" />
                <NumberInput source="ano" validate={[
                        required(),
                        maxValue(currentYear, `O ano máximo é ${currentYear}`),
                    ]} />
                <ReferenceInput source="cliente_id" reference="clientes" validate={required()}/>
            </SimpleForm>
        </Create>
    );
}

export default VeiculosCreate;