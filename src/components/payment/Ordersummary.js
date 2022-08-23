import React, { useContext } from 'react'
import { GlobalContext } from './index';
import { AiOutlineCheck } from "react-icons/ai"
import { Button } from 'react-bootstrap';

function Ordersummary({ ordersummary }) {
  const { info } = useContext(GlobalContext)
  return (
    <div>
      <div className='InvoiceTitle'>
        <div className='InvoiceCheck'>
          <AiOutlineCheck className='CheckIcon' />
        </div>
        <h6>Invoice Paid</h6>
      </div>
      <p className='InvoiceDetail'>
        The invoice from<span>Lufthansa</span> for the amount of<span>€{info}</span> was paid on 01/06/2021
      </p>
      <Button className="continueBtn" onClick={() => { ordersummary(1) }}>
        Back To MarketPlace
      </Button>
    </div>
  )
}

export default Ordersummary