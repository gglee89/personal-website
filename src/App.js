import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// SCREENS
import NotFoundScreen from './screens/NotFoundScreen';
import HomeScreen from './screens/HomeScreen';

/**
 * @render react
 * @name App
 * @description Whole app composed to tiny bit components
 * <App />
 */
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} />
        <Route path="*" component={NotFoundScreen} exact />
      </Switch>
    </Router>
  );
};

export default App;
