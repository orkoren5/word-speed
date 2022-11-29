import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import muiTheme from "./muiTheme";
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { StyledEngineProvider } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={muiTheme}>
          <StyledEngineProvider injectFirst>
            <App />
          </StyledEngineProvider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);