import logoLight from '../assets/logosvg.svg'; // Importe a logo para o tema claro
import logoDark from '../assets/logobranca 1.svg'; // Importe a logo para o tema escuro
import { Box, useTheme } from '@mui/material';

const MainPage = () => {
    const theme = useTheme();
  
    // Escolha a logo com base no tipo de tema
    const logoSrc = theme.palette.mode === 'dark' ? logoDark : logoLight;
  
    return (
      <Box sx={{ margin: 'auto', display: "flex", justifyContent: "center", marginTop: 10, width: 'min-content', borderRadius: '140px' }}>
        <Box
          component="img"
          sx={{
            height: 500,
            width: 500,
            maxHeight: { xs: 500, md: 350 },
            maxWidth: { xs: 300, md: 350 },
          }}
          alt="Logo Motormanager"
          src={logoSrc}
        />
      </Box>
    );
  };
  
  export default MainPage;