import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Directory = () => {
  const [employee, setEmployee] = useState([])
  const employ = { employ }

  const fetchData = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/greentree/employees'
    )
    setEmployee(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <img
        className="logo"
        src="https://images.squarespace-cdn.com/content/v1/59a45f208dd0417e11b72295/1506354276011-NDZ0E1I0Y77HRI22I07I/ke17ZwdGBToddI8pDm48kM23kTEFsOlO-E9t8lnFkuZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTms-iCac3VOpQdEbEA2jL9jYjQ5kj-ocyRYHSNEcqyNfcvYxWb_Rh7v-YkKVoTHpBy/cemaquaretree.png"
      />
      <h2 className="direct">Employee Directory</h2>
      <ul className="list">
        {employee.map((item, i) => {
          return (
            <li className="directory-item" key={i} data={item}>
              <Link
                className="direct-item"
                to={{
                  pathname: `/${item.id}`,
                  state: { item }
                }}
              >
                <h3>
                  {item.lastName}, {item.firstName}
                </h3>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Directory
