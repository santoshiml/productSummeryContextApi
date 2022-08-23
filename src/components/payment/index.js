import Emi from "./Emi";
import Payment from "./Payment";
import Ordersummary from "./Ordersummary";
import React, { createContext, useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

export const GlobalContext = createContext();

function MainContent() {
  const [step, setStep] = useState(1);
  const [payment, setpayment] = useState();

  function ordersummary(val) {
    setStep(val);
  }

  function getrupee(rupees) {
    setpayment(rupees);
  }

  function value(val) {
    setStep(val);
  }

  function paymentpage(val) {
    setStep(val);
  }
  return (

    <Form className="mainContent">
      <Container>
        <Row>
          <Col lg={8}>
            <GlobalContext.Provider value={{ info: payment }}>
              {step === 1 ? (
                <Emi item={getrupee} switchpayment={value} />
              ) : step === 2 ? (
                <Payment paymentpage={paymentpage} />
              ) : (
                <Ordersummary ordersummary={ordersummary} />
              )}
            </GlobalContext.Provider>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default MainContent;
