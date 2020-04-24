import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import Table from "../tables/OrdersTable";

class OrdersPage extends Component {

    render() {
        return (
            <div className="OrdersPage">
                <Menu />
                <h1>Orders</h1>
                <Table/>
            </div>
        );
    }
}

export default OrdersPage;