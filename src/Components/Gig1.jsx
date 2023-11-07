import React from 'react'


export default function Gig1({setCount}) {

    function handleSubmit(e){
        e.preventDefault()
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        setCount(2)
    }
  return (
    <>
         <h1>
            Let’s with strong job headline.
        </h1>
        <p className="step-description">
            The helps your job post stand out to the right candidates. This is first thing they will see. So make it count!
        </p>
        <form onSubmit={handleSubmit} className='gig-form'>
            <div className="step-form-div">
                <label for="">
                    Write a headline for your job post
                </label>
                <input type="search" placeholder="Search for jobs" />
            </div>
            <div className="step1-form">
                <p>Examples</p>
                <li className="step1-form-l">
                    Build responsive wordpress site with booking/payment functionality.
                </li>
                <li className="step1-form-l">
                    Graphics designer needed to designed creative for multiple campaigns.
                </li>
            </div>
            <div className="step-form-div">
                <label htmlFor="">
                    Select a job category
                </label>
                <select name="" id="">
                    <option value="" disabled selected>Please select</option>
                    <option value="">job</option>
                    <option value="">job</option>
                    <option value="">job</option>
                </select>
            </div>
            <div className="step-form-div">
                <label htmlFor="">
                    Describe the work:
                </label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Enter a project description'></textarea>
            </div>
            <button className="step-btn">
                Next : skills
            </button>
        </form> 
    </>
  )
}
