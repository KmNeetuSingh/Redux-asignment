// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/quiz" component={Quiz} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;
