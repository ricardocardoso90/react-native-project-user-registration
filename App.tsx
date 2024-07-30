import theme from './src/theme/theme';
import { ThemeProvider } from 'styled-components/native';

import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}