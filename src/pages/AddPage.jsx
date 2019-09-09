import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Footer from '../components/Footer'

const AddPage = () => {
  const [addform, setaddform] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    phoneNumber: '',
    email: ''
  })

  const addEmployee = async e => {
    e.preventDefault()
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/greentree/employees',
      { addform }
    )
  }

  const update = e => {
    setaddform({
      ...addform,
      [e.target.id]: e.target.value
    })
  }

  return (
    <>
      <Header />
      <img
        className="logo"
        src="https://images.squarespace-cdn.com/content/v1/59a45f208dd0417e11b72295/1506354276011-NDZ0E1I0Y77HRI22I07I/ke17ZwdGBToddI8pDm48kM23kTEFsOlO-E9t8lnFkuZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTms-iCac3VOpQdEbEA2jL9jYjQ5kj-ocyRYHSNEcqyNfcvYxWb_Rh7v-YkKVoTHpBy/cemaquaretree.png"
      />

      <h2 className="direct">Add Employee</h2>

      <form onsubmit={addEmployee} action="">
        <div className="add">
          <input
            id="firstName"
            required
            type="text"
            placeholder="first name"
            onChange={update}
          />
        </div>
        <div className="add">
          <input
            id="lastName"
            required
            type="text"
            placeholder="last name"
            onChange={update}
          />
        </div>
        <div className="add">
          <input
            id="jobTitle"
            required
            type="text"
            placeholder="job title"
            onChange={update}
          />
        </div>

        <div className="add">
          <input
            id="phoneNumber"
            required
            type="text"
            placeholder="phone number"
            onChange={update}
          />
        </div>

        <div className="add">
          <input
            id="email"
            required
            type="text"
            placeholder="email"
            onChange={update}
          />
        </div>
        <button className="form" type="submit" name="action">
          Submit
        </button>
      </form>
    </>
  )
}

export default AddPage
