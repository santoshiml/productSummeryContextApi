import React from "react";
import { Button, Nav } from "react-bootstrap";
import { FiPhone, FiMail } from "react-icons/fi"
import { HiDownload } from "react-icons/hi"

function Sidebar() {
  return (
    <>
      <Nav className="nav-menu active">
        <div className="sidebar-container">
          <div className="transaction-detail-box">
            <div className="menu-title mb-4">Transaction summary</div>
            <div className="menuBox">
              <div className="menu-title">Amount</div>
              <div className="amount-control menu-subtitle">
                <div className="menu-amount">€430.02</div>
                <Button type="button" class="btn btn-info">
                  Open
                </Button>
              </div>
            </div>
            <div className="menuBox">
              <div className="menu-title">Recipient</div>
              <div className="menu-subtitle">
                Crp.co <FiMail className="subMenusIcons" /> <FiPhone className="subMenusIcons" />
              </div>
            </div>
            <div className="menuBox">
              <div className="menu-title">Invoice number</div>
              <div className="menu-subtitle">
                #2021-95674
              </div>
            </div>
            <div className="menuBox">
              <div className="menu-title">PO number</div>
              <div className="menu-subtitle">
                89173419620
              </div>
            </div>
            <Button className="btn invoiceBtn"> <HiDownload />Download invoice</Button>
          </div>
          <div className="dispute-box">
            <p>
              Do you dispute this transaction?
            </p>
            <Button className="btn dispute-btn">Open a dispute</Button>
          </div>
        </div>
      </Nav>

    </>
  );
}

export default Sidebar;
