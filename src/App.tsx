import './App.css';
import ExchangeListInfo from '../src/components/list-info/ExchangeListInfo';
import { ThemeProvider } from 'styled-components';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ExchangeListInfo />
    </ThemeProvider>
  );
}

export default App;
