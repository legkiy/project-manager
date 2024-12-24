import { RouterProvider } from 'react-router';
import { router } from './router';
import MuiThemeProvider from './MuiThemeProvider';
import './i18n';

const ConfigLayput = () => {
  return (
    <MuiThemeProvider>
      <RouterProvider router={router} />
    </MuiThemeProvider>
  );
};
export default ConfigLayput;
