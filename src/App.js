import React, { Component } from 'react';
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import './App.css';

import HomePage from './components/pages/HomePage';
import ArtistsPage from "./components/pages/ArtistsPage";
import CouriersPage from './components/pages/CouriersPage';
import CustomersPage from "./components/pages/CustomersPage";
import DeliveriesPage from "./components/pages/DeliveriesPage";
import OrderedItemsPage from './components/pages/OrderedItemsPage';
import OrdersPage from './components/pages/OrdersPage';
import PaymentsPage from './components/pages/PaymentsPage';
import PicturesPage from './components/pages/PicturesPage';
import WaybillsPage from "./components/pages/WaybillsPage";

import { MoreHoriz, AddBox, Delete, Edit, Build } from '@material-ui/icons';

class App extends Component {

  render() {

    return (
        <div className="App">
          <BrowserRouter>
            <Route exact path={"/"} component={HomePage}/>
            <Route exact path={"/artists"} component={ArtistsPage}/>
            <Route exact path={"/couriers"} component={CouriersPage}/>
            <Route exact path={"/customers"} component={CustomersPage}/>
            <Route exact path={"/deliveries"} component={DeliveriesPage}/>
            <Route exact path={"/ordered_items"} component={OrderedItemsPage}/>
            <Route exact path={"/orders"} component={OrdersPage}/>
            <Route exact path={"/payments"} component={PaymentsPage}/>
            <Route exact path={"/pictures"} component={PicturesPage}/>
            <Route exact path={"/waybills"} component={WaybillsPage}/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
