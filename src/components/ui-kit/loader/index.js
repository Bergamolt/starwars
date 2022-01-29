import styles from './styles.module.css'

import cn from 'classnames'
import PropTypes from 'prop-types'

import { ReactComponent as Spinner } from './img/loading.svg'

export const Loader = ({ className, theme = 'white' }) => {
  return (
    <Spinner
      className={ cn(styles.Loader, styles[theme], className) }
    />
  )
}

Loader.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
}
