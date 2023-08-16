import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, RadioButtonGroupInput, DateTimeInput, ReferenceInput, SelectInput, required, DateInput } from 'react-admin';
import { OrdemServico } from '../../types';
import ServicesInput from '../../components/ServicesInput';

const OrdensServicoEdit: React.FC = (props) => {
    return (
        <Edit<OrdemServico> {...props}>
            <SimpleForm>
                <RadioButtonGroupInput source="status" choices={[
                { id: 'Concluído',  name: 'Concluído' },
                { id: 'Em andamento', name: 'Em Andamento' },
                ]} defaultValue="Em andamento"/>
                <DateTimeInput source="dataSolicitacao" label="Data de Solicitação"  validate={required()} />
                <DateInput source="dataEntrega" label="Data de Entrega" validate={required()} />
                <ReferenceInput source="veiculo_id" reference="veiculos">
                <SelectInput label="Veículo" validate={required()} />
                </ReferenceInput>
                <ServicesInput validate={required()}/>
                <NumberInput source="orcamento" label="Orçamento Final" min="0" validate={required()} />
            </SimpleForm>
        </Edit>
    );
};

export default OrdensServicoEdit;
