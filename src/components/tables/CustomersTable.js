import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class Customers extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Full name', field: 'full_name' },
                { title: 'Email', field: 'email' },
                { title: 'Login', field: 'login' },
                { title: 'Password', field: 'password' },
                { title: 'Address 1', field: 'address2' },
                { title: 'Address 2', field: 'address2' },
                { title: 'Phone number', field: 'phone' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/customers`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Customers Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Customers"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/customers/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/customers/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/customers/${oldData.id}`)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                }}
            />
        );
    }
}
