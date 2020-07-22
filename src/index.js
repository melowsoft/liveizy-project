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

//protected route
import {ProtectedRoute} from './components/ProtectedRoute/ProtectedRoute'


import PageLoader from './components/PageLoader/PageLoader';

//Pages
const Home = lazy(() => import('./containers/Register'))
const Login = lazy(() => import('./containers/Login'))
const SignupSuccess = lazy(() => import('./views/SingupSuccess/SignupSuccess'))

//Dashboard Routes
const Dashboard = lazy(() => import('./Layouts/Dashboard'))

const hist = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<PageLoader />}>
      <React.StrictMode>
          <Router history={hist}>
            <Switch>
               <ProtectedRoute path="/admin" component={Dashboard} />
               <Route path="/login" component={Login} />
               <Route exact path="/signup-success" component={SignupSuccess} />
               <Route exact path="/" component={Home} />
            </Switch>
          </Router>
      </React.StrictMode>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
