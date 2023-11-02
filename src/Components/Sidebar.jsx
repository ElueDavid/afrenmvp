import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Sidebar({section,setVisibleSection,isVisibleSection}) {
  const [isActive, setisActive] = useState("")
  const [isSubMenuOpen, setSubMenuOpen] = useState(false)
  const navigate = useNavigate()
  function handleClick(){
    setSubMenuOpen(!isSubMenuOpen)
  }
  return (
    <>
      <ul class="side-menu" 
      style={
          {position : isVisibleSection === "message"    
          ? "sticky" : "fixed",
          top: "70px", left : "0"
          }
          }
        >
        <li class="menu-opt2" onClick={()=>setVisibleSection(section)}>
          <a class={ isVisibleSection == section ? "active" : null} href="javascript:void(0)"><i class="fa fa-qrcode icon" aria-hidden="true"></i>Dashboard</a>
        </li>
        <li class="menu-opt2" onClick={()=>setVisibleSection("message")}>
          <a href="javascript:void(0)" class={ isVisibleSection == "message" ? "active" : null}>
            <i class="fa fa-comment-o icon" aria-hidden="true"></i>Messages
          </a>
        </li>
        <li class="menu-opt2" onClick={()=>{navigate("/jobs")}} >
          <a href="javascript:void(0)"><i class="fas fa-suitcase icon"></i>My Jobs</a></li>
        <li class="menu-opt2" onClick={()=>setVisibleSection("leaderboard")} >
          <a class={isVisibleSection == "leaderboard" ? "active" : null}  href="javascript:void(0)"><i class="fas fa-award icon"></i>Leader board</a>
        </li>
        <li class="menu-opt2" onClick={()=>setVisibleSection("billings")} >
          <a href="javascript:void(0)" class={isVisibleSection == "billings" ? "active" : null} ><i class="far fa-credit-card icon"></i>Billings</a>
        </li>
        <li id="sett-divdrop" className={isSubMenuOpen ? 'opensettdrp' : null}>
          <p id="sett-btn" onClick={handleClick}>
            <i class="fas fa-cog icon"></i>Settings 
            <i class="fas fa-caret-down sett-drpic"></i>
          </p>
          <div id="settdrop-cover2">
            <div id="sett-drop">
              <div id="settdrop-line"></div>
              <ul id="sett-dropcontent">
                <li><a href="">Profile</a></li>
                <li><a href="">Account</a></li>
                <li><a href="">Security</a></li>
                <li><a href="">Bids</a></li>
                <li onClick={()=> setVisibleSection("feedback")}>
                  <a href="javascript:void(0)">Feedback</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu-opt2" onClick={()=>setVisibleSection("helpdispute")}>
          <a href="javascript:void(0)" class={ isVisibleSection == "helpdispute" ? "active" : null}  >
            <i class="far fa-question-circle icon"></i>Help Center</a></li>
        <li class="menu-opt2">
          <a href="javascript:void(0)" onClick={()=> navigate("/login")}>
            <i class="fas fa-sign-out-alt icon"></i>Logout
          </a>
        </li>
      </ul>
    </>
  )
}
