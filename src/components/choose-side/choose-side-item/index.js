import styles from '../styles.module.css'

import PropTypes from 'prop-types'
import cn from 'classnames'

export const ChooseSideItem = ({ img, name, onChangeTheme }) => (
  <div
    onClick={ onChangeTheme(name) }
    className={ cn(styles.ChooseSide__item, styles[`ChooseSide__item-${ name }`]) }
  >
    <img src={ img } alt={ name }/>
    <span className={ styles.ChooseSide__title }>{ name }</span>
  </div>
)

ChooseSideItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  onChangeTheme: PropTypes.func,
}