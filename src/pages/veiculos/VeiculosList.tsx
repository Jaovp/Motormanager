import { Datagrid, List, TextField, SimpleList } from "react-admin"
import { useMediaQuery, Theme } from '@mui/material';
import { Veiculo } from "../../types";

const postRowStyle = () => ({
    borderBottom: '1px solid #ccc',
});

const VeiculosList: React.FC = () => {
    const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <List>
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
        <Datagrid rowClick="edit">
            <TextField<Veiculo> source="placa" label="Placa"/>
            <TextField<Veiculo> source="cor" label="Cor" />
            <TextField<Veiculo> source="modelo" label="Modelo" />
            <TextField<Veiculo> source="ano" label="Ano" typeof="number" />
        </Datagrid>
      )}
    </List>
  );
};

export default VeiculosList;