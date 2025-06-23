<<<<<<< HEAD
import theme from './src/theme/theme';
import { ThemeProvider } from 'styled-components/native';

import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
=======
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <> 
      <Home/>
    </>
>>>>>>> 4b66a93e7bbc5c2a490bcfe1f2cb1db5070ab18f
  )
}