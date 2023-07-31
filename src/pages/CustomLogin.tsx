import { useState } from 'react';
import { useLogin, Button, Form, TextInput, required, useTranslate, Login, useNotify } from 'react-admin';
import { Avatar, Card, CardActions, CircularProgress} from '@mui/material';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import 'firebase/auth';
import { useLocation } from 'react-router-dom';

import { firebaseConfig as config, firebaseApp as firebaseAppInstance } from '../utils/FIREBASE_CONFIG.js';
import { RAFirebaseOptions } from 'react-admin-firebase';

interface FormValues {
    email?: string;
    password?: string;
}



export const CustomLogin = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    


    const notify = useNotify();
    const location = useLocation();

    
    const handleLogin = async () => {
        
        const userCredential = await firebaseAppInstance.auth().signInWithEmailAndPassword(email, password);
        const token = await userCredential.user?.getIdToken();
        await login({ token }).catch((error) => {
            console.log(error);
            notify('Invalid email or password');
        }
        );
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
        <Card sx={{ minWidth: 300, marginTop: '6em' }}>
          <Box
            sx={{
              margin: '1em',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
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
                type="email"
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
                    <LoginIcon sx={{ marginRight: '0.5em' }} />
                </Button>
            </CardActions>
        </Card>
      </Box>
    </Form>
  );
  
};
