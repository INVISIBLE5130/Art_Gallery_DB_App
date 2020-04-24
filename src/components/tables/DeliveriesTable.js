import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class Deliveries extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Start date', field: 'start_date' },
                { title: 'Finish date', field: 'finish_date' },
                { title: 'Status', field: 'status' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/deliveries`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Deliveries Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Deliveries"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/deliveries/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/deliveries/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/deliveries/${oldData.id}`)
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
