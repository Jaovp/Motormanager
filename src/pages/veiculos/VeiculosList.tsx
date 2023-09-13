import { Datagrid, List, TextField, SimpleList, EditButton, SearchInput, TextInput, TopToolbar, CreateButton, DeleteButton } from "react-admin"
import { useMediaQuery, Theme } from '@mui/material';
import { Veiculo } from "../../types";
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

const ListActions = () => (
  <TopToolbar>
      <CreateButton/>
  </TopToolbar>
);


const filterVeiculos = [
  <TextInput source="placa" label="Placa" format={(value) => value && value.toUpperCase()}  alwaysOn InputProps={{
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

const VeiculosList: React.FC = () => {
    const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <List filters={filterVeiculos} actions={<ListActions/>}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.placa}
          secondaryText={(record) => record.modelo}
          rowStyle={postRowStyle}
        >
            <TextField<Veiculo> source="placa" label="Placa"/>
            <TextField<Veiculo> source="cor" label="Cor" />
            <TextField<Veiculo> source="modelo" label="Modelo" />
            <TextField<Veiculo> source="ano" label="Ano" />
        </SimpleList>
      ) : (
        <Datagrid>
            <TextField<Veiculo> source="placa" label="Placa"/>
            <TextField<Veiculo> source="cor" label="Cor" />
            <TextField<Veiculo> source="modelo" label="Modelo" />
            <TextField<Veiculo> source="ano" label="Ano" typeof="number" />
            <Box sx={{display: "flex", justifyContent: "end"}}>
              <EditButton/>
            </Box>
            <DeleteButton mutationMode="pessimistic" confirmTitle="Cuidado"/>
        </Datagrid>
      )}
    </List>
  );
};

export default VeiculosList;