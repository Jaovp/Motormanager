import { Datagrid, EmailField, List, TextField, SimpleList, FunctionField, EditButton, TextInput, TopToolbar, CreateButton, DeleteButton } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import { Cliente } from '../../types';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';


const clientesFilter = [
    <TextInput label="Nome" source="nome" alwaysOn resettable format={(value) => value && value.charAt(0).toUpperCase() + value.slice(1)} InputProps={{
      endAdornment: (
          <InputAdornment position="end">
              <SearchIcon color="disabled" />
          </InputAdornment>
      ),
    }}/>
]

const ListActions = () => (
  <TopToolbar>
      <CreateButton/>
  </TopToolbar>
);


const postRowStyle = () => ({
  borderBottom: '1px solid #ccc',
});

const renderTipo = (record: any) => {
    // Se o tipo for "J", exibe "Jurídico", caso contrário, exibe "Físico"
    return record.tipo === "J" ? "Jurídico" : "Físico";
  };


const ClientesList = () => {
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <List filters={clientesFilter} actions={<ListActions/>}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.nome}
          secondaryText={(record) => record.email}
          rowStyle={postRowStyle}
        >
          <TextField<Cliente> source="nome" label="Nome"/>
          <EmailField<Cliente> source="email" label="Email" />
          <TextField<Cliente> source="telefone" label="Telefone"/>
          <FunctionField<Cliente> label="Tipo" render={renderTipo} />
          
        </SimpleList>
      ) : (
        <Datagrid>
          <TextField<Cliente> source="nome" label="Nome"/>
          <EmailField<Cliente> source="email" label="Email" />
          <TextField<Cliente> source="telefone" label="Telefone" />
          <FunctionField<Cliente> source='tipo' label="Tipo" render={renderTipo} />
          <TextField<Cliente> source="doc" label="CPF/CNPJ" />
          <Box sx={{display: "flex", justifyContent: "end"}}>
            <EditButton/>
          </Box>
          <DeleteButton mutationMode="pessimistic" confirmTitle="Cuidado"/>
        </Datagrid>
      )}
    </List>
  );
};

export default ClientesList;