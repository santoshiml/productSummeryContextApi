
import React from "react";
import { Form, Button } from "react-bootstrap";

function Emi(props) {
  const [disabled, enabled] = React.useState("disabled");
  
  const Continue = () => {
    props.switchpayment(2);
  };

  function Insert(val) {
    if (val != null) {
      enabled();
    }
    props.item(val);
  }

  return (
    <div>
      <h5 className="termsHeading">Choose your terms</h5>
      <Form.Check type="radio" className="emi-selector">
        <Form.Check.Label className="formEmiLable">
          <Form.Check.Input name="emi" type="radio" onClick={() => Insert(4327102)} />
          <div className="formEmiLeft">1 Payment due</div>
          <div className="formEmiRight">€43,271.02</div>
        </Form.Check.Label>
      </Form.Check>
      <Form.Check type="radio" className="emi-selector" >
        <Form.Check.Label className="formEmiLable">
          <Form.Check.Input name="emi" type="radio" onClick={() => Insert(2163551)} />
          <div className="formEmiLeft">2 Payment due</div>
          <div className="formEmiRight">€21,635.51</div>
        </Form.Check.Label>
      </Form.Check>
      <Form.Check type="radio" className="emi-selector" >
        <Form.Check.Label className="formEmiLable">
          <Form.Check.Input name="emi" type="radio" onClick={() => Insert(1442367)} />
          <div className="formEmiLeft">3 Payment due</div>
          <div className="formEmiRight">€14,423,67</div>
        </Form.Check.Label>
      </Form.Check>
      <Button name="submit" className={`continueBtn ${disabled}`} onClick={Continue}>
        Continued
      </Button>
    </div>
  );
}

export default Emi;
