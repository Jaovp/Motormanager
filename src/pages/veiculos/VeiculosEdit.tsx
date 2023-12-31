import { Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, maxLength, maxValue, minLength, required } from "react-admin";
import { Veiculo } from "../../types";

const currentYear = new Date().getFullYear();

const VeiculosEdit: React.FC = () => {
    return (
        <Edit<Veiculo> title="Edição de Veículo" redirect = "list">
            <SimpleForm>
                <TextInput source="placa" format={(value) => value && value.toUpperCase()}  validate={[
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
        </Edit>
    );
}

export default VeiculosEdit;