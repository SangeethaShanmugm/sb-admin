import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function Table() {
    const data = useContext(UserContext) //subscribe
    console.log(data)
    return (
        <div>
            <div className='card'>
                <div className='card-header'>
                    <h5>User Data</h5>
                </div>
                <div className='card-body'>
                    <div className='table-responsive'>
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.userData.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table