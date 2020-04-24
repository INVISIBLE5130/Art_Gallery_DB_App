import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class ArtistsTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Full name', field: 'full_name' },
                { title: 'Nickname', field: 'nickname' },
                { title: 'Biography', field: 'biography' },
                { title: 'Date of birth', field: 'birth' },
                { title: 'Birth place', field: 'birth_place' },
                { title: 'Average price', field: 'average_price' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/artists`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Artists Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Artists"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/artists/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/artists/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/artists/${oldData.id}`)
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
