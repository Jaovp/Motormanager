import { Datagrid, EmailField, List, TextField, SimpleList, FunctionField } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';

const postRowStyle = () => ({
  borderBottom: '1px solid #ccc',
});

const renderTipo = (record: any) => {
    // Se o tipo for "J", exibe "Jurídico", caso contrário, exibe "Físico"
    return record.tipo === "J" ? "Jurídico" : "Físico";
  };


export const ClientesList = () => {
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.nome}
          secondaryText={(record) => record.email}
          rowStyle={postRowStyle}
        >
          <TextField source="nome" label="Email"/>
          <EmailField source="email" label="Email" />
          <TextField source="telefone" label="Telefone"/>
        </SimpleList>
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="nome" label="Nome"/>
          <EmailField source="email" label="Email" />
          <TextField source="telefone" label="Telefone" />
          <FunctionField label="Tipo" render={renderTipo} />
        </Datagrid>
      )}
    </List>
  );
};
