import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import WidtCard from './WidtCard';
import ListltemConteiner from './ListltemConteiner';

class NavBar extends Component {
    render() {

        return ( <
            div >
            <
            div >
            <
            Nav defaultActiveKey = "/home"
            as = "ul" >
            <
            Nav.Item as = "li" >
            <
            Nav.Link href = "/home" > VINO BLANCO < /Nav.Link> < /
            Nav.Item > <
            Nav.Item as = "li" >
            <
            Nav.Link eventKey = "link-1" > VINO TINTO < /Nav.Link> < /
            Nav.Item > <
            Nav.Item as = "li" >
            <
            Nav.Link eventKey = "link-2" > ESPUMANTE < /Nav.Link> < /
            Nav.Item > <
            /Nav>  < /
            div >

            <
            section >
            <
            WidtCard / >
            <
            ListltemConteiner(
                this.props.name) /
            > < /
            section > < /
            div >
        );

    }
}
export default NavBar;