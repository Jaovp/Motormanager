import { Datagrid, List, TextField, SimpleList, ReferenceField, DateField, ReferenceArrayField, NumberField } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import { OrdemServico, Veiculo } from '../../types';

const postRowStyle = () => ({
  borderBottom: '1px solid #ccc',
});



const OrdensServicosList = () => {
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={
          <ReferenceField<OrdemServico> label="Veículo" source="veiculo_id" reference="veiculos" >
            <TextField source="placa" />
          </ReferenceField>}

          secondaryText={
          <ReferenceArrayField<OrdemServico> label="Serviços" reference="servicos" source="servicos_id" />}
          
          rowStyle={postRowStyle}
        >
          <TextField<OrdemServico> label="Status" source="status"  />
          <ReferenceField<OrdemServico> label="Veículo" source="veiculo_id" reference="veiculos" />
          <DateField<OrdemServico> label="Data de Solicitação" source="dataSolicitacao" />
          <DateField<OrdemServico> label="Data de Entrega" source="dataEntrega" />
          <ReferenceArrayField<OrdemServico> label="Serviços" reference="servicos" source="servicos_id" />
        </SimpleList>
      ) : (
        <Datagrid rowClick="edit">
          <TextField<OrdemServico> label="Status"  source="status"  />
          <ReferenceField<OrdemServico> label="Veículo" source="veiculo_id" reference="veiculos" >
            <TextField source="placa" />
          </ReferenceField>
          <DateField<OrdemServico> label="Data de Solicitação" source="dataSolicitacao" />
          <DateField<OrdemServico> label="Data de Entrega" source="dataEntrega" />
          <ReferenceArrayField<OrdemServico> label="Serviços" reference="servicos" source="servicos_id" />
          <NumberField<OrdemServico> label="Orçamento" source="orcamento" locales="pt-br" options={{ style: 'currency', currency: 'BRL' }}/>
          
        </Datagrid>
      )}
    </List>
  );
};

export default OrdensServicosList;