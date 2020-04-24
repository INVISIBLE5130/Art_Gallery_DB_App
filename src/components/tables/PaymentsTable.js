import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class Payments extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Type', field: 'type' },
                { title: 'Credit card', field: 'credit_card' },
                { title: 'Sum', field: 'sum' },
                { title: 'Date', field: 'date' },
                { title: 'Status', field: 'status' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/payments`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Payments Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Payments"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/payments/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/payments/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/payments/${oldData.id}`)
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
