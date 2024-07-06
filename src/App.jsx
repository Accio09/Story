import React from 'react'
import Nav from './Comp/Nav/Nav'
import Main from './Comp/Main/Main'
import Streams from './Comp/Streams/Streams'
import Heading from './Comp/Heading/Heading'
import AboutUs from './Comp/AboutUs/AboutUs'
import Say from './Comp/Say/Say'
import Cont from './Comp/Cont/Cont'
import Foot from './Comp/Foot/Foot'


const App = () => {
  return (
    <div>

      <Nav/>
      <Main/>
      <div className="container">
        <Heading subTitle = 'Top Drama Picks' title='Netflix Korean Edition'/>
      <Streams/>
      <AboutUs/>
      <Heading subTitle= 'Hidden Gems' title ="...lesser known dramas"/>
      <Say/>
      <Heading subTitle= "Contact Us" title='Get In Touch'/>
      <Cont/>
      <Foot/>
      
      </div>
    </div>
  )
}

export default App

