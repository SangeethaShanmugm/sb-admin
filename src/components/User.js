import React from 'react'
import { Link } from "react-router-dom"


function User() {
  return (
    <div>
      <Link to="/user-create" className="btn btn-primary">Create User</Link>
    </div>
  )
}

export default User