import {
  Admin,
  CustomRoutes,
  Resource,
} from "react-admin";
import { Route } from 'react-router-dom';
import { FirebaseAuthProvider, FirebaseDataProvider, RAFirebaseOptions } from "react-admin-firebase";
import { firebaseConfig as config, firebaseApp as firebaseAppInstance } from './utils/FIREBASE_CONFIG.js';
import { CustomLogin } from "./pages/CustomLogin.js";
import  i18nProvider  from '../src/utils/i18n/pt-br.js';
import clientes from "./pages/clientes/index.js";
import servicos from "./pages/servicos/index.js";
import veiculos from "./pages/veiculos/index.js";
import ordensServico from "./pages/ordensServico/index.js";
import { CustomLayout } from "./layout/Layout";
import { darkTheme, lightTheme } from "./layout/themes.js";
import CustomHome from "./pages/customHome.js";


const options: RAFirebaseOptions = {
  logging: true,
  lazyLoading: {
    enabled: true
  }
  
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);


export const App = () => 
<Admin 
theme={lightTheme}
darkTheme={darkTheme}
defaultTheme="light"
dataProvider={dataProvider} 
authProvider={authProvider} 
title="Motormanager" 
i18nProvider={i18nProvider} 
layout={CustomLayout}
loginPage={CustomLogin}
>
  <CustomRoutes>
    <Route  path="/home" element={<CustomHome/>}/>
  </CustomRoutes>
  <Resource name="clientes" recordRepresentation="nome" {...clientes}/>
  <Resource name="veiculos" recordRepresentation="placa"{...veiculos}/>
  <Resource name="servicos" recordRepresentation="nome" {...servicos}/>
  <Resource name="ordensServico" {...ordensServico}/>
</Admin>;
