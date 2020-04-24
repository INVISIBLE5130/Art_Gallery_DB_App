import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import Table from "../tables/DeliveriesTable";

class DeliveriesPage extends Component {

    render() {
        return (
            <div className="DeliveriesPage">
                <Menu />
                <h1>Deliveries</h1>
                <Table/>
            </div>
        );
    }
}

export default DeliveriesPage;
