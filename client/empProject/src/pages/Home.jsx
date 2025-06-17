import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='d-flex w-100 justify-content-center align-items-center'>
        <div className='w-50 p-5'>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Designation</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>A</td>
                        <td>15000</td>
                        <td>Manager</td>
                        <td>a@gmail.com</td>
                        <td>
                            <Link to='edit' style={{textDecoration:"none",color:"blue"}}><i className='fa-solid fa-pen-to-square'></i>&nbsp;&nbsp;</Link>
                            <i className='fa-solid fa-trash'></i>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home