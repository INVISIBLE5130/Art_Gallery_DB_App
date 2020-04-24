import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class Waybills extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Date', field: 'date' },
                { title: 'Delivery address', field: 'delivery_address' },
                { title: 'Details', field: 'details' },
                { title: 'Status', field: 'status' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/waybills`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Waybills Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Waybills"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/waybills/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/waybills/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/waybills/${oldData.id}`)
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
