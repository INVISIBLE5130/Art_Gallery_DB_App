import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class Pictures extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Name', field: 'name' },
                { title: 'Price', field: 'price' },
                { title: 'Size', field: 'size' },
                { title: 'Description', field: 'description' },
                { title: 'Created year', field: 'created_year' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/pictures`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Pictures Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Pictures"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/pictures/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/pictures/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/pictures/${oldData.id}`)
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
