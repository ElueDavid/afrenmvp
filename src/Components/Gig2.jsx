import React from 'react'

export default function Gig2({setCount,count}) {

    function handleSubmit(e){
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        setCount(3);
    }

  return (
    <>
        <h1 className="step-h1">
            Skills required for the work
        </h1>
        <p className="description">
            What are the main skills required for the work
        </p>
        <form action="" onSubmit={handleSubmit} className='gig-form'>
            <div className="step-form-div">
                <label for="">
                    Search skills or add your own
                </label>
                <input type="search" placeholder="Add skills required on the work"/>
            </div>
            <p className='gig-recommendation'>For the best results, add 3-5 skills</p>
            
            <div className="step-skills">
                <section>
                    <p>Selected Skills</p>
                    <div className="step-skills-space s1">
                        <div className="skill">
                            <p>UX design</p>
                            <img src="afren-images/cancell.png" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Wordpress</p>
                            <img src="afren-images/cancell.png" alt=""/>
                        </div>
                        <div className="skill">
                            <p>User Interface Design</p>
                            <img src="afren-images/cancell.png" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Wordpress</p>
                            <img src="afren-images/cancell.png" alt=""/>
                        </div>
                    </div>
                </section>
                <section>
                    <p>Popular Skills</p>
                    <div className="step-skills-space s2">
                        <div className="skill">
                            <p>User Interface Design</p>
                            <img src="afren-images/Plus.svg" alt=""/>
                        </div>
                        <div className="skill">
                            <p>User Interface Design</p>
                            <img src="afren-images/Plus.svg" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Motion design</p>
                            <img src="afren-images/Plus.svg" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Wordpress</p>
                            <img src="afren-images/Plus.svg" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Wordpress</p>
                            <img src="afren-images/Plus.svg" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Wordpress</p>
                            <img src="afren-images/Plus.svg" alt=""/>
                        </div>
                    </div>
                </section>
            </div>
            <button className="step-btn" >
                Next: scope
            </button>
        </form>
    </>
  )
}
