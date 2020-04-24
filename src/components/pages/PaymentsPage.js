import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import Table from "../tables/PaymentsTable";

class PaymentsPage extends Component {

    render() {
        return (
            <div className="PaymentsPage">
                <Menu />
                <h1>Payments</h1>
                <Table/>
            </div>
        );
    }
}

export default PaymentsPage;