import React from 'react'

const Raw = ({ el, handleAlert, handleDelete }) => {
    return (
        <><tr >
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.city}</td>
            <td>{el.username}</td>
            <td><button onClick={() => handleDelete(el.id)}>X</button></td>
        </tr></>
    )
}

export default Raw