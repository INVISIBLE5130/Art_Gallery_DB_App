import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import Table from "../tables/CouriersTable";

class CouriersPage extends Component {

    render() {
        return (
            <div className="CouriersPage">
                <Menu />
                <h1>Couriers</h1>
                <Table/>
            </div>
        );
    }
}

export default CouriersPage;
