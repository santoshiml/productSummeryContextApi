import React from "react";
import { FaRegCalendar } from "react-icons/fa"
import { FiInfo } from "react-icons/fi"
import { Button, Row, Col, Nav, Tab, Form, InputGroup } from "react-bootstrap";

function Payment(props) {
  return (
    <div>
      <h5 className="paymentHeading">Your payment</h5>
      <Row>
        <Col lg={6}>
          <div className="paymentLable"> Net Term</div>
          <p className="paymentHeading">30 days</p>
        </Col>
        <Col lg={6}>
          <div className="paymentLable">Due date</div>
          <p className="paymentHeading">20/05/2021</p>
        </Col>
        <Col lg={12}>
          <div className="divider"></div>
        </Col>
        <Col lg={6}>
          <div className="paymentHeading mt-3">Your Payment</div>
        </Col>
      </Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav>
          <Nav.Item className="paymentTab">
            <Nav.Link eventKey="first" href="#">
              Bank Transfer
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="paymentTab">
            <Nav.Link eventKey="second" href="#">
              Pay by Bank
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="paymentTab">
            <Nav.Link eventKey="third" href="#">
              Credit Card
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="paymentTab">
            <Nav.Link eventKey="fourth" href="#">
              IDEAL
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="mt-3">
          <Tab.Pane eventKey="first">
            <Row className="mb-3">
              <Col lg={6}>
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="paymentLable mb-1">Label</Form.Label>
                  <Form.Control type="number" placeholder="7444 5454 5451" />
                </Form.Group>
              </Col>
              <Col lg={3}>
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="paymentLable mb-1">Pick date</Form.Label>
                  <InputGroup>
                    <Form.Control
                      placeholder="123"
                      aria-describedby="basic-addon2"
                      className="InputGroupText"
                    />
                    <InputGroup.Text id="basic-addon2" className="inputIcon"><FaRegCalendar /></InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={3}>
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="paymentLable mb-1">Label</Form.Label>
                  <InputGroup>
                    <Form.Control
                      placeholder="123"
                      aria-describedby="basic-addon2"
                      className="InputGroupText"
                    />
                    <InputGroup.Text id="basic-addon2" className="inputIcon"><FiInfo /></InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={6}>
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="paymentLable mb-1">Name</Form.Label>
                  <Form.Control type="number" placeholder="C. Hancock" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Label className="paymentLable mb-1">Country</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Country</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            test2
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            test2
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            test2
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      <Button className="continueBtn" onClick={() => props.paymentpage(3)} >
        Confirm Payment
      </Button>
    </div>
  );
}

export default Payment;
