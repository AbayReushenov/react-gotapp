import React from "react"
import './errorMessage.css'
import img from './error2.jpg'

const ErrorMessage = () => {
    return (
    <>
        <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="Error"></img>
        <img src={img} alt='error'></img>
        <span className="error">Something like # 404 is happening</span>
    </>
    )
}

export default ErrorMessage