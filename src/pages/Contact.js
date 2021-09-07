import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <form>
        <h1>Contact Me </h1>
        <label>name</label>
        <input type="text" placeholder=" type your Name"/>
        <label>email</label>
       <input type="email" placeholder="email"/>

      </form>
    </div>
  )
}

export default Contact
