import { Datagrid, EmailField, List, TextField, SimpleList } from 'react-admin';
import { useMediaQuery, Theme} from '@mui/material';

const postRowStyle = () => ({
    borderBottom: '1px solid #ccc',
});

export const ClientesList = () => {
    const isSmall = useMediaQuery((theme: Theme)  => theme.breakpoints.down('sm'));

    return (
        <List>
            {isSmall ? (<SimpleList primaryText={(record) => record.nome} secondaryText={(record) => record.email} rowStyle={postRowStyle}>
                <TextField source="nome" />
                <EmailField source="email" />
            </SimpleList>) :
            (<Datagrid rowClick="edit">
                <TextField source="nome" />
                <EmailField source="email" />
            </Datagrid>)}
        </List>
    );
};