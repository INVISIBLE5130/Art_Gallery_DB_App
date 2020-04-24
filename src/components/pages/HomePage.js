import Menu from '../Menu';
import {Component} from "react";
import React from "react";
import '../../styles/HomePage.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedValue: 'Nothing selected'
        }
    }

    render() {
        return (
            <div className="HomePage">
                <Menu/>
            </div>
        );
    }
}

export default App;
