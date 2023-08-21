import { Datagrid, EmailField, List, TextField, SimpleList, FunctionField, EditButton } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import { Cliente } from '../../types';

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
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.nome}
          secondaryText={(record) => record.email}
          rowStyle={postRowStyle}
        >
          <TextField<Cliente> source="nome" label="Email"/>
          <EmailField<Cliente> source="email" label="Email" />
          <TextField<Cliente> source="telefone" label="Telefone"/>
          <FunctionField<Cliente> label="Tipo" render={renderTipo} />
          
        </SimpleList>
      ) : (
        <Datagrid rowClick="edit">
          <TextField<Cliente> source="nome" label="Nome"/>
          <EmailField<Cliente> source="email" label="Email" />
          <TextField<Cliente> source="telefone" label="Telefone" />
          <FunctionField<Cliente> source='tipo' label="Tipo" render={renderTipo} />
          <TextField<Cliente> source="doc" label="CPF/CNPJ" />
          <EditButton/>
        </Datagrid>
      )}
    </List>
  );
};

export default ClientesList;