import { Datagrid, List, TextField, SimpleList, ReferenceField, DateField, ReferenceArrayField, NumberField, EditButton, TextInput, ReferenceInput, TopToolbar, CreateButton, useRecordContext, DeleteButton } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import { OrdemServico, Veiculo } from '../../types';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

const ListActions = () => (
  <TopToolbar>
      <CreateButton/>
  </TopToolbar>
);

const postRowStyle = () => ({
  borderBottom: '1px solid #ccc',
});

const filterOrdensServicos = [
  <ReferenceInput
    reference="veiculos"
    source="veiculo_id"
    label="Placa"
    alwaysOn
    resetabble
  />
];



const OrdensServicosList = (props: any) => {
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <List filters={filterOrdensServicos} actions={<ListActions/>}>
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
        <Datagrid>
          <TextField<OrdemServico> label="Status"  source="status"/>
          <ReferenceField<OrdemServico> label="Veículo" source="veiculo_id" reference="veiculos" >
            <TextField source="placa" />
          </ReferenceField>
          <DateField<OrdemServico> label="Data de Solicitação" source="dataSolicitacao" />
          <DateField<OrdemServico> label="Data de Entrega" source="dataEntrega" />
          <ReferenceArrayField<OrdemServico> label="Serviços" reference="servicos" source="servicos_id" />
          <NumberField<OrdemServico> label="Orçamento" source="orcamento" locales="pt-br" options={{ style: 'currency', currency: 'BRL' }}/>
          <Box sx={{display: "flex", justifyContent: "end"}}>
              <EditButton/>
          </Box>
          <DeleteButton mutationMode="pessimistic" confirmTitle="Cuidado"/>
        </Datagrid>
      )}
    </List>
  );
};

export default OrdensServicosList;