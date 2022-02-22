import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Item = ({task, handleRemove, handleToggle}) => {
    const strike = { "textDecoration": "line-through"};
    return (
        <Row xs={10} as="h5" className="justify-content-md-center">
            <Col xs={6}  style={task.done ? strike : null}>
                {task.name}
            </Col>
            <Col>
                <Button id={task.id} variant="outline-warning" onClick={handleToggle}>{task.done ? "Undo" : "Done"}</Button>{' '}
                <Button id={task.id} key={task.id} variant="outline-danger" onClick={handleRemove}>Remove</Button>{' '}
            </Col>
        </Row>
    )
}
 
export default Item;