import React, { Component } from 'react';


class ListltemConteiner extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log(this.props);
    }

    render() {

        return ( <
            div > < p > hola hola { this.props.Greeting } < /p> 

            <
            /div>
        );

    }
}
export default ListltemConteiner;