import React, { useState } from 'react'

export default function Gig4({setCount,count}) {
    const [hour,setHour] = useState("")
    const [hour1,setHour1] = useState("")
    
    function handleSubmit(e){
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
  return (
    <>
       <h1>
            State out the budget
        </h1>
        <p className="step-description">
            This will help match freelancer within your set range
        </p>
        <form action="" onSubmit={handleSubmit} className='gig-form'>
            <div className="step-items">
                <div className="step-item step-item1">
                    <div className="step-tick step-tick1">
                        <p className="step-tick1-p"></p>
                    </div>
                    <p className="step-item-text">Project budget</p>
                </div>
                <div className="step-item step-item2">
                    <div className="step-tick step-tick2">
                        <p className="step-tick2-p"></p>
                    </div>
                    <p className="step-item-text">Hourly rate</p>
                </div>
            </div>
            <div className="step-conversion">
                <section>
                    <p>From</p>
                    <div className="step-rate">
                        <div>
                            <p>NGN</p>
                            <input 
                                type="tel" 
                                name='hour'
                                value={hour}
                                onChange={(e)=>{setHour(e.target.value)}}
                                />
                        </div>
                        <p className="step-hour">/ hour</p>
                    </div>
                </section>
                <section>
                    <p>To</p>
                    <div className="step-rate">
                        <div>
                            <p>NGN</p>
                            <input 
                                type="tel" 
                                name='hour1'
                                value={hour1}
                                onChange={(e)=>{setHour1(e.target.value)}}
                                />
                        </div>
                        <p className="step-hour">/ hour</p>
                    </div>
                </section>
            </div>
            <p className="step-conversion-description">
                This is the average rate for similar projects
            </p>
            <button className="step-btn" >
                Publish Gig
            </button>
        </form>
    </>
  )
}
