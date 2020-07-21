import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers';
import './index.css';



//Pages
const Home = lazy(() => import('./views/Home/Home'))
const Login = lazy(() => import('./views/Login/Login'))

//Dashboard Routes
const Dashboard = lazy(() => import('./Layouts/Dashboard'))

const hist = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
          <Router history={hist}>
            <Switch>
               <Route path="/admin" component={Dashboard} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/" component={Home} />
            </Switch>
          </Router>
      </React.StrictMode>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
