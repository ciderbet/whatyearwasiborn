import { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { showSuccessMessage, showErrorMessage } from '../helpers/alerts'
import { API } from '../config'
// import Router from 'next/router'

const Homepage = () => {
  const [state, setState] = useState({
    name: '',
    age: '',
    error: '',
    success: '',
    button: {
      text: 'Calculate',
      className: 'btn btn-primary',
      spanClassName: '',
      type: '',
      spanRole: '',
      ariaHidden: ''
    }
  })

  const { name, age, error, success, button } = state

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: '',
      success: '',
      buttonText: 'Calculate'
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setState({
      ...state,
      button: {
        text: 'Calculating',
        className: 'btn btn-primary',
        spanClassName: 'spinner-border spinner-border-sm',
        type: 'button',
        spanRole: 'status',
        ariaHidden: 'true'
      }
    })
    try {
      const response = await axios.post(`${API}`, {
        name,
        age
      })
      console.log(response)
      setTimeout(() => {
        setState({
          ...state,
          name: '',
          age: '',
          buttonText: 'Finished',
          success: response.data.message
        })
      }, 6000)
      // Router.push('/success')
    } catch (error) {
      setState({
        ...state,
        buttonText: 'Calculate',
        error: error.response.data.error.msg
      })
    }
  }

  /* const handleSubmit = e => {
    e.preventDefault()
    // console.table({ name, age })
    axios.post(`http://localhost:8000`, {
      name,
      age
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  } */

  const homepageForm = () =>
    <form onSubmit={handleSubmit} className="text-center">
      <div className="form-group">
        <input
          value={name}
          onChange={handleChange('name')}
          type="text"
          className="form-control"
          placeholder="Your name"
          required
        />
      </div>
      <div className="form-group input-group">
        <input
          value={age}
          onChange={handleChange('age')}
          type="number"
          className="form-control"
          placeholder="Your age"
          min="1"
          max="120"
          required
        />
        <div className="input-group-append">
          <span className="input-group-text">years</span>
        </div>
      </div>
      {/* <div className="form-group">
        <button className={button.className}>{button.text}</button>
      </div> */}
      <button
        className={button.className}
        type={button.type} >
        <span
          className={button.spanClassName}
          role={button.spanRole}
          aria-hidden={button.ariaHidden}>
        </span>
        {button.text}
      </button>
    </form>

  return (
    <Layout>
      <br />
      <div className="col-md-6 offset-md-3">
        <h1 className="text-center">Find the year you were born
        </h1>
        <p className="text-center">Our powerful algorithms allow you to easily find your year of birth online without having to search for   any paperwork.</p>
        {success && showSuccessMessage(success)}
        {error && showErrorMessage(error)}
        {homepageForm()}
        <br />
        {/* {JSON.stringify(state)} */}
      </div>
    </Layout>
  )
}

export default Homepage
