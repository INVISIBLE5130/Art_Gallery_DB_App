import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import Table from "../tables/CustomersTable";

class CustomersPage extends Component {

    render() {
        return (
            <div className="CustomersPage">
                <Menu />
                <h1>Customers</h1>
                <Table/>
            </div>
        );
    }
}

export default CustomersPage;
