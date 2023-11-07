import React from 'react'

export default function Gig3({setCount,count}) {

    function handleSubmit(e){
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        setCount(4);
    }
  return (
    <>
         <h1 className="step-h1">
            Estimating the scope
        </h1>
        <p className="description">
            Consider the size of your project and the time it witll take
        </p>
        <form action="" onSubmit={handleSubmit} className='gig-form'>
            <div className="step-work-scope">
                <h3>How long will the work take?</h3>
                <div className="swc-div">
                    <input type="radio" name="1" id="" />
                    <p>More than 6 months</p>
                </div>
                <div className="swc-div">
                    <input type="radio" name="1" id="" />
                    <p>3 to 6 months</p>
                </div>
                <div className="swc-div">
                    <input type="radio" name="1" id="" />
                    <p>1 to 3 months</p>
                </div>
            </div>
            <div className="step-work-scope">
                <h3>What level of experience will the work need?</h3>
                <div className="swc-div">
                    <input type="radio" name="2" id="" />
                    <p>Entry level</p>
                </div>
                <div className="swc-div">
                    <input type="radio" name="2" id="" />
                    <p>Intermediate level</p>
                </div>
                <div className="swc-div">
                    <input type="radio" name="2" id="" />
                    <p>Expert level</p>
                </div>
            </div>
            <div className="step-work-scope">
                <h3>Difficulty level of the work</h3>
                <div className="swc-div">
                    <input type="radio" name="3" id="" />
                    <p>Large</p>
                </div>
                <div className="swc-div">
                    <input type="radio" name="3" id="" />
                    <p>Medium</p>
                </div>
                <div className="swc-div">
                    <input type="radio" name="3" id="" />
                    <p>Small</p>
                </div>
            </div>
            <button className="step-btn" >
                Next : Budget
            </button>
        </form> 
    </>
  )
}
