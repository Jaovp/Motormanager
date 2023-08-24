import { useState } from 'react';
import { useLogin, Form, TextInput, required, useTranslate, Login, useNotify } from 'react-admin';
import { Avatar, Card, CardActions, CircularProgress, Button} from '@mui/material';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { firebaseConfig as config, firebaseApp as firebaseAppInstance } from '../utils/FIREBASE_CONFIG.js';
import logo from '../assets/logosvg.svg'

interface FormValues {
    email?: string;
    password?: string;
}



export const CustomLogin = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    

    const navigate = useNavigate();

    const notify = useNotify();

    
    const handleLogin = async () => {
      setLoading(true); // Iniciar o loading
      console.log(email, password);
      try {
        console.log('entrou no try');
        const userCredential = await firebaseAppInstance.auth().signInWithEmailAndPassword(email, password);
        const token = await userCredential.user?.getIdToken();
        login({ token });
        navigate('/home'); // Redirecionar para a página Home
      } catch (error) {
        notify('Senha ou email incorretos');
      } finally {
        setLoading(false); // Parar o loading
      }
    };
    
    
    
        



  return (
    <Form onSubmit={handleLogin}> 
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#CAE9FF',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
      <Box
        component="img"
        sx={{
          height: 500,
          width: 500,
          maxHeight: { xs: 100, md: 200 },
          maxWidth: { xs: 100, md: 200 },
          
        }}
        alt="Logo Motormanager"
        src={logo}
      />
        <Card sx={{ minWidth: 300, marginTop: '1em'}}>
          <Box
            sx={{
              margin: '1em',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <LockIcon />
            </Avatar>
          </Box>
          <Box
            sx={{
              marginTop: '1em',
              display: 'flex',
              justifyContent: 'center',
              color: theme => theme.palette.grey[500],
            }}
          ></Box>
          <Box sx={{ padding: '0 1em 1em 1em' }}>
            <Box sx={{ marginTop: '1em' }}>
              <TextInput
                autoFocus
                source="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                validate={required()}
                fullWidth
              />
            </Box>
            <Box sx={{ marginTop: '1em' }}>
              <TextInput
                source="senha"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                validate={required()}
                fullWidth
              />
            </Box>
          </Box>
          <CardActions sx={{ padding: '0 1em 1em 1em' }}>
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                >
                    {loading && (
                                <CircularProgress size={25} thickness={2} />
                            )}
                    <LoginIcon sx={{ marginRight: '0.5em', color: 'white' }} />
                </Button>
            </CardActions>
        </Card>
      </Box>
    </Form>
  );
  
};
