import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import Table from "../tables/WaybillsTable";

class WaybillsPage extends Component {

    render() {
        return (
            <div className="WaybillsPage">
                <Menu />
                <h1>Waybills</h1>
                <Table/>
            </div>
        );
    }
}

export default WaybillsPage;