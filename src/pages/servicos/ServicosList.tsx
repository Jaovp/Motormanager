import { Datagrid, EditButton, EmailField, List, ListProps, NumberField, SearchInput, SimpleList, TextField, TextInput } from "react-admin";
import { useMediaQuery, Theme } from '@mui/material';
import { Servico } from "../../types";
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

const filterServicos = [
  <TextInput source="nome" label="Nome" format={(value) => value && value.charAt(0).toUpperCase() + value.slice(1)} resettable alwaysOn InputProps={{
    endAdornment: (
        <InputAdornment position="end">
            <SearchIcon color="disabled" />
        </InputAdornment>
    ),
  }}/>,
]

const postRowStyle = () => ({
    borderBottom: '1px solid #ccc',
});

const ServicosList: React.FC<ListProps> = () => {
    const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <List filters={filterServicos}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.nome}
          secondaryText={(record) => record.valor}
          rowStyle={postRowStyle}
        >
          <TextField<Servico> source="nome" label="Nome"/>
          <NumberField<Servico> source="valor" label="Valor" locales="pt-br" options={{ style: 'currency', currency: 'BRL' }}/>
          
        </SimpleList>
      ) : (
        <Datagrid>
          <TextField<Servico>  source="nome" label="Nome"/>
          <NumberField<Servico>  source="valor" label="Valor" locales="pt-br" options={{ style: 'currency', currency: 'BRL' }}/>
          <Box sx={{display: "flex", justifyContent: "end"}}>
            <EditButton/>
          </Box>
        </Datagrid>
      )}
    </List>
  );
};

export default ServicosList;