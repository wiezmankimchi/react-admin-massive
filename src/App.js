// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';

// import { fetchUtils } from "react-admin";

import jsonServerProvider from 'ra-data-json-server';

import UserList from './components/Users'
import TableList from './components/TableList'

import dataProvider from './components/dataProvider'


const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="users" list={UserList} /> */}
    <Resource name="getTables" list={TableList} />
    <Resource name="getTblDetails/public/products" list={ListGuesser} />
    
  </Admin>
)

export default App;
