import React from 'react'
import PropTypes from 'prop-types'; // ES6

const Button = (props) => {

    return (
        <div><button onClick={props.onClick} >{props.str.toLowerCase()}</button></div>
    )
}


Button.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    str: PropTypes.string,
    num: PropTypes.number,
}

Button.defaultProps = {
    handleAlert: () => { }
}

export default Button