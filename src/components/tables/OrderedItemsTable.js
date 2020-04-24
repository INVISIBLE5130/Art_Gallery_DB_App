import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class OrderedItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Details', field: 'details' },
                { title: 'Count', field: 'count' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/orderedItems`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Ordered Items Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Ordered items"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/orderedItems/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/orderedItems/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/entertainments/${oldData.id}`)
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
