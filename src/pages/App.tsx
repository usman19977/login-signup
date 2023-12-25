import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Home from './home/index';
import Dashboard from './dashboard/index';
import Login from './auth/login';
import SignUp from './auth/signup';
import AuthLayout from '../components/layouts/AuthLayout';
import UnAuthLayout from '../components/layouts/UnAuthLayout';
import { DASHBOARD, HOME, LOGIN, SIGNUP } from '../constants/routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path={HOME} />

          <Route element={<AuthLayout />}>
            <Route element={<Dashboard />} path={DASHBOARD} />
          </Route>

          <Route element={<UnAuthLayout />}>
            <Route element={<Login />} path={LOGIN} />
            <Route element={<SignUp />} path={SIGNUP} />
          </Route>
        </Routes>
      </Router>
    </div>

  );
};

export default App;
