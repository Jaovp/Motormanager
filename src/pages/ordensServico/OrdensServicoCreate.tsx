import React from "react";
import { Create, SimpleForm, DateTimeInput, DateInput, RadioButtonGroupInput, required, ReferenceField, ReferenceInput, SelectInput, TextField, NumberInput } from "react-admin";
import { OrdemServico } from "../../types";
import ServicesInput from "../../components/ServicesInput";


const CurrentDate = () => {
  const now = new Date();
  return now.toISOString();
};


const OrdensServicosCreate: React.FC = () => {


  return (
    <Create<OrdemServico> >
      <SimpleForm>
        <RadioButtonGroupInput source="status" choices={[
            { id: 'Concluído',  name: 'Concluído' },
            { id: 'Em andamento', name: 'Em Andamento' },
        ]} defaultValue="Em andamento"/>
        <DateTimeInput source="dataSolicitacao" label="Data de Solicitação" defaultValue={CurrentDate()} validate={required()} />
        <DateInput source="dataEntrega" label="Data de Entrega" defaultValue={CurrentDate()} validate={required()} />
        <ReferenceInput source="veiculo_id" reference="veiculos">
          <SelectInput label="Veículo" validate={required()} />
        </ReferenceInput>
        <ServicesInput validate={required()}/>
        <NumberInput source="orcamento" label="Orçamento Final" min="0" validate={required()} />
      </SimpleForm>
    </Create>
  );
};

export default OrdensServicosCreate;
