import '../index.css'
import styles from './styles.module.css'
import cn from 'classnames'

import PropTypes from 'prop-types'

export const Button = ({ text, onClick, disabled, className, theme = 'white' }) => {
  return (
    <button
      onClick={ onClick }
      disabled={ disabled }
      className={ cn(styles.Button, styles[theme], className) }
    >
      { text }
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
}
