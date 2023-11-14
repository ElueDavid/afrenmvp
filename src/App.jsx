import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landingpage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'
import ClientReg from './Pages/ClientReg'
import News from './Pages/News'
import HowItWorks from './Pages/HowItWorks'
import Privacy from './Pages/Privacy'
import RegOne from './Pages/RegOne'
import Terms from './Pages/Terms'
import BuyerReg from './Pages/BuyerReg'
import ContactUs from './Pages/ContactUs'
import Freelancer from './Pages/Freelancer'
import Testimonails from './Pages/Testimonails'
import FreelancerSignup from './Pages/FreelancerSignup'
import ClientSignup from './Pages/ClientSignup'
import Leaderboard from './Pages/Leaderboard'
import Help from './Pages/Help'
import HelpDispute from './Pages/HelpDispute'
import Faq from './Pages/Faq'
import Jobs from './Pages/Jobs'
import Blog from './Pages/Blog'
import Client from './Pages/Client'
import Myjobs from './Pages/Myjobs'
import CreateGig from './Pages/CreateGig'
import CompleteRegistration from './Pages/CompleteRegistration'

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path="/blog" element={<Blog />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* <Route path="/freelancersignup" element={<FreelancerSignup />} /> */}
        {/* <Route path='/clientsignup' element={<ClientSignup />} /> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/clientreg' element={<ClientReg/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path="/freelancerreg" element={<RegOne />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/buyerreg" element={<BuyerReg />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/freelancerdash" element={<Freelancer />} />
        <Route path="/clientdash" element={<Client />} />
        <Route path="/testimonails" element={<Testimonails />} />
        {/* <Route path='/leaderboard' element={<Leaderboard />} /> */}
        <Route path='/help' element={<Help />} />
        {/* <Route path='/helpdispute' element={<HelpDispute />} /> */}
        <Route path='/faq' element={<Faq />} />
        <Route path='/jobs' element={<Jobs />} />
        {/* <Route path='/myjobs' element={<Myjobs />} /> */}
        <Route path="/createGig" element={<CreateGig />} />
        <Route path="/completeregistration" element={<CompleteRegistration />} />
      </Routes>
    </Router>
  )
}

export default App
