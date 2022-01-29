import styles from './styles.module.css'

import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import cancel from './img/cancel.svg'

export const TextField = ({ onChange, value, className, placeholder = 'Input character\'s name' }) => {
  const handleChange = event => onChange(event.target.value)

  const onClear = () => onChange('')

  return (
    <div className={ cn(styles.TextField, className) }>
      <input
        value={ value }
        onChange={ handleChange }
        placeholder={ placeholder }
        className={ styles.TextField__input }
      />
      <img
        onClick={ onClear }
        src={ cancel }
        alt={ 'Cancel' }
        className={ cn(
          styles.TextField__img,
          value && styles.TextField__isNotEmpty
        ) }
      />
    </div>
  )
}

TextField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string
}