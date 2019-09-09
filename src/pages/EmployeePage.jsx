import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const EmployeePage = props => {
  const [employee, setemployee] = useState([])
  const data = props.location.state.item

  const fetchData = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/greentree/employees/${data.id}`
    )

    setemployee(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <img
        className="logo"
        src="https://images.squarespace-cdn.com/content/v1/59a45f208dd0417e11b72295/1506354276011-NDZ0E1I0Y77HRI22I07I/ke17ZwdGBToddI8pDm48kM23kTEFsOlO-E9t8lnFkuZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTms-iCac3VOpQdEbEA2jL9jYjQ5kj-ocyRYHSNEcqyNfcvYxWb_Rh7v-YkKVoTHpBy/cemaquaretree.png"
      />
      <section className="employee-data">
        <h2>
          {employee.firstName} {employee.lastName}
        </h2>
        <p>{employee.jobTitle}</p>
        <p>{employee.phoneNumber}</p>
        <p>{employee.email}</p>{' '}
      </section>
    </>
  )
}

export default EmployeePage
