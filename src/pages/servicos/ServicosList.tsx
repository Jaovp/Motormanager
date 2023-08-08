import { Datagrid, EmailField, List, ListProps, NumberField, SimpleList, TextField } from "react-admin";
import { useMediaQuery, Theme } from '@mui/material';
import { Servico } from "../../types";

const postRowStyle = () => ({
    borderBottom: '1px solid #ccc',
});

const ServicosList: React.FC<ListProps> = () => {
    const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.nome}
          secondaryText={(record) => record.valor}
          rowStyle={postRowStyle}
        >
          <TextField<Servico> source="nome" label="Nome"/>
          <NumberField<Servico> source="valor" label="Valor" />
          
        </SimpleList>
      ) : (
        <Datagrid rowClick="edit">
          <TextField<Servico>  source="nome" label="Nome"/>
          <NumberField<Servico>  source="valor" label="Valor" />
        </Datagrid>
      )}
    </List>
  );
};

export default ServicosList;