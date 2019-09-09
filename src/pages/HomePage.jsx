import React, { useState, useEffect } from 'react'
import Directory from '../components/Directory'
import Header from '../components/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Directory />
    </div>
  )
}

export default HomePage
