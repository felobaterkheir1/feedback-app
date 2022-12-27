import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ title}) => {
  return (
    <div className='header'>
      {title}
    </div>
  )
}

Header.defaultProps = {
    title: 'hello Fedback UI'
} 

Header.propTypes = {
    title: PropTypes.string
}

export default Header;