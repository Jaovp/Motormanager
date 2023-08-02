import {
  Admin,
  Resource,
} from "react-admin";
import { FirebaseAuthProvider, FirebaseDataProvider, RAFirebaseOptions } from "react-admin-firebase";
import { firebaseConfig as config, firebaseApp as firebaseAppInstance } from './utils/FIREBASE_CONFIG.js';
import { ClientesList } from "./pages/clientes/ClientesList.js";
import { CustomLogin } from "./pages/CustomLogin.js";
import  i18nProvider  from '../src/utils/i18n/pt-br.js';
import { ClientesCreate } from "./pages/clientes/ClientesCreate.js";
import PeopleIcon from '@mui/icons-material/People';


const options: RAFirebaseOptions = {
  logging: true,
  lazyLoading: {
    enabled: true
  }
  
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);


export const App = () => 
<Admin dataProvider={dataProvider} authProvider={authProvider} title="Motormanager" i18nProvider={i18nProvider}>
  <Resource name="clientes" list={ClientesList} create={ClientesCreate} icon={PeopleIcon}/>

</Admin>;
