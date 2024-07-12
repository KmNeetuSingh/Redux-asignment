import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CoffeeList from './CoffeeList';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => (
    <Provider store={store}>
        <ChakraProvider>
            <CoffeeList />
        </ChakraProvider>
    </Provider>
);

export default App;
