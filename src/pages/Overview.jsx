import React from 'react'

function Overview() {
  return (
    <>
    <title> This is the Overview page!</title>

    <div className='main' role='main'>
      <h1> Overview </h1>
      <p>Welcome to the Overview Page!</p> 
      <p>Here you will find a brief introduction about the types website accessibility
         as well as sneak peaks into what to expect for the other pages.
      </p>

      <div className ="See">
      <h>EYE</h>
      <p>MY EYES</p>
      </div>

      <div className ="Hear">
      <h>EAR</h>
      <p>MY EARS</p>
      </div>

      <div className ="Typing">
      <h>FINGER</h>
      <p>MY FINGIES</p>
      </div>

      
      <h>Showcase</h>
      <p>showcase context</p>
      <h>Quiz</h>
      <p>quiz context</p>
      <h>Learn More</h>
      <p>learn more context</p>
    </div>
    </>
  )
}

export default Overview
