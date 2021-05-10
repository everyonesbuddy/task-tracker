import React from 'react';
import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <div>
            <header>
                <h1>{title}</h1>
                <button>Add</button>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.protoTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
