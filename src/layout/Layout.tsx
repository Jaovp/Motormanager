import { Layout } from 'react-admin';

import { CustomAppBar } from './AppBar';
import { CustomErrorPage } from './Error';

export const CustomLayout = (props: any) => <Layout {...props} appBar={CustomAppBar} error={CustomErrorPage} />;