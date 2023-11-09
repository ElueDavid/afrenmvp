import React, { useState } from 'react'
import "../style.css"
import Gig1 from '../Components/Gig1'
import Gig2 from '../Components/Gig2'
import Gig3 from '../Components/Gig3'
import Gig4 from '../Components/Gig4'

export default function CreateGig() {
    const [count,setCount] = useState(1)
  return (
    <main className='step-main'>
        <p className="step-number">
            Step {count} of 4
        </p>
        {
        count === 1
        ? <Gig1  count={count} setCount={setCount}/>
        : count == 2
        ? <Gig2 count={count} setCount={setCount} />
        : count == 3
        ? <Gig3 count={count} setCount={setCount} />
        : <Gig4 count={count} setCount={setCount} />
        }
    </main>
  )
}
