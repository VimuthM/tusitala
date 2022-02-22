import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Input = ({handleChange, handleAdd}) => {
    return (
        <Form style={{"justifyContent": "center"}}>
            <Row className="justify-content-md-center">
                <Col >
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Name
                </Form.Label>
                <Form.Control name="foo" className="mb-2" id="inlineFormInput" placeholder="Don't Procrastinate" onChange={handleChange}/>
                </Col>
                <Col>
                <Button type="submit" className="mb-2" onClick={handleAdd}>
                    Add task
                </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Input;