import React from 'react'
import { Link } from "react-router-dom"
import Table from './Table'


function User() {
  return (
    <div>
      <Link to="/user-create" className="btn btn-primary">Create User</Link>
      <Table />
    </div>
  )
}

export default User