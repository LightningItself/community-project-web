import React from 'react';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import lightTheme from './chakra/lightTheme';

function App() {
  return (
    <RecoilRoot>
        <ChakraProvider theme={lightTheme}>
            <Navbar/>
        </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
