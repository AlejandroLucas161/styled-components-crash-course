import Header from './components/Header';
import GlobalStyles from './components/styles/Global';

import { Fragment } from 'react';
import { Container } from './components/styles/Container.styled'
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />

        <Header />

        <Container>
          <h1>Hello Styled Components</h1>
        </Container>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;