import React from 'react';
import {Provider} from "react-redux";
import {Router, Switch, Route} from "react-router-dom";
import store from "./state/store";
import history from "./utils/history";
import routes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {routes.map(route => <Route {...route}/>)}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
