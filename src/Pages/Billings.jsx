import React, { useState } from 'react'
import Payment from '../Components/Payment'

export default function Billings() {
    const [section, setSection] = useState("payment")
  return (
    <>
        <div id="main-pay">
            <h3 id="heading">Billing</h3>
            <div id="page-title">
                <a href="javacript:void(0)" className="each-pg-ttle active">Payment</a>
                <a href="javascript:void(0)" className="each-pg-ttle">Invoice</a>
                <a href="javascript:void(0)" className="each-pg-ttle">Payment History</a>
            </div>
            {
             section === "payment"
             ? <Payment />
             : null
            }
        </div>
    </>
  )
}
