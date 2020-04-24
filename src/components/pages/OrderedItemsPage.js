import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import Table from "../tables/OrderedItemsTable";

class OrderedItemsPage extends Component {

    render() {
        return (
            <div className="OrderedItemsPage">
                <Menu />
                <h1>Ordered items</h1>
                <Table/>
            </div>
        );
    }
}

export default OrderedItemsPage;
