import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import Table from "../tables/PicturesTable";

class PicturesPage extends Component {

    render() {
        return (
            <div className="PicturesPage">
                <Menu />
                <h1>Pictures</h1>
                <Table/>
            </div>
        );
    }
}

export default PicturesPage;