import React from 'react'
import "../Styles/sett-security.css"


export default function SettingSecurity() {
  return (
    <div id="main">
        <div className="form-label"><h3>Change Password</h3></div>
            <form action="">
                <label for="">New Password</label>
                <input type="password" id="" name="" placeholder=""/>
            
                <label for="">Re-enter Password</label>
                <input type="password" id="" name="" placeholder=""/>
                
                <input type="submit" className="send-code" value="Send Verification Code"/>
            </form>
            <p>Enter the 6-digit OTP code sent to your mail</p>
            <div className="otp">
                <input type="text" maxlength="1" name="" id=""/>
                <input type="text" maxlength="1" name="" id=""/>
                <input type="text" maxlength="1" name="" id=""/>
                <input type="text" maxlength="1" name="" id=""/>
                <input type="text" maxlength="1" name="" id=""/>
                <input type="text" maxlength="1" name="" id=""/>
            </div>
            <button className="pass-change">Change Password</button>
            <div className="form-label"><h3>Change Password</h3></div>
            <form action="">
                <label for="">Enter New Phone Number</label>
                <input type="tel" id="" name="" placeholder=""/>
                
                <input type="submit" className="send-code" value="Send Verification Code"/>
            </form>
            <p>Enter the 6-digit OTP code sent to your mail</p>
            <div className="otp-outter">
                <div className="otp">
                    <input type="text" maxlength="1" name="" id=""/>
                    <input type="text" maxlength="1" name="" id=""/>
                    <input type="text" maxlength="1" name="" id=""/>
                    <input type="text" maxlength="1" name="" id=""/>
                    <input type="text" maxlength="1" name="" id=""/>
                    <input type="text" maxlength="1" name="" id=""/>
                </div>
            </div>
            <button className="pass-change">Change Number</button>
    </div>
  )
}
