import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Einstein from './components/dashboard/einstein';
import Möbius from './components/dashboard/möbius';
import Newton from './components/dashboard/newton';
import Layout from './components/layout';
import Author from './pages/author';
import DialogView from './pages/dialog_view';
import BadEnding1 from './pages/ending/bad_ending_1';
import BadEnding2 from './pages/ending/bad_ending_2';
import CanonEnding from './pages/ending/canon_ending';
import GoodEnding1 from './pages/ending/good_ending_1';
import GoodEnding2 from './pages/ending/good_ending_2';
import Login from './pages/login/login';

function App() {
  return (
    <Layout>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard/möbius">
       <Möbius/>
      </Route>
      <Route path="/dashboard/einstein">
       <Einstein/>
      </Route>
      <Route path="/dashboard/newton">
       <Newton/>
      </Route>
      <Route path="/author">
       <Author/>
      </Route>
      <Route path="/simulation">
       <DialogView/>
      </Route>
      <Route path="/ending/1">
       <CanonEnding/>
      </Route>
      <Route path="/ending/2">
       <BadEnding1/>
      </Route>
      <Route path="/ending/3">
       <BadEnding2/>
      </Route>
      <Route path="/ending/4">
       <GoodEnding1/>
      </Route>
      <Route path="/ending/5">
       <GoodEnding2/>
      </Route>
    </Layout>
  );
}

export default App;
