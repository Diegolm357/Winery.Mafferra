import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
class WidtCard extends Component {
    render() {

        return (


            <
            Card style = {
                { width: '18rem' }
            } >
            <
            Card.Body >
            <
            Card.Title > VENTA DE VINOS < /Card.Title> <
            Card.Subtitle className = "mb-2 text-muted" > Seleccion de los Mejores < /Card.Subtitle> <
            Card.Text >
            Solo usted puede elegir entre una amplia variedad de varietales y colores. < /
            Card.Text > <
            Card.Link href = "#" > El mejor precio < /Card.Link> <
            Card.Link href = "#" > La mayor velocidad de entrega < /Card.Link> < /
            Card.Body > <
            /Card>

        );

    }
}
export default WidtCard;