import React from 'react'
import { Table } from 'react-bootstrap'
import Raw from './Raw'

const TableR = ({ users ,handleAlert,handleDelete}) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>{users.map(el => <Raw el={el} handleDelete={handleDelete} key={el.id} handleAlert={handleAlert}/>)}</tbody>
            </Table>
        </div>
    )
}


//[{1},{2}]   ==>    [<Raw obj={1}/>,<Raw obj={2}/>]

export default TableR