import React, { Component } from 'react';

const greeting = (props) => {
    return <p > { props.name } < /p>; 
};



class ListltemConteiner extends Component {


    render() {

        return (

            <
            greeting name = "Diego" / >


        );

    }
}
export default ListltemConteiner;