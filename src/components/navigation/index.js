import styles from './styles.module.css'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../ui-kit/button'

export const Navigation = ({ counterPage, prevPage, nextPage, getResource }) => {
  const handlerPrevClick = () => getResource(prevPage)
  const handlerNextClick = () => getResource(nextPage)

  return (
    <div className={styles.Navigation}>
      <Link to={ `/people/?page=${ counterPage - 1 }` }>
        <Button text="Prev" onClick={handlerPrevClick} disabled={!prevPage}/>
      </Link>
      <Link to={ `/people/?page=${ counterPage + 1 }` }>
        <Button text="Next" onClick={handlerNextClick} disabled={!nextPage}/>
      </Link>
    </div>
  )
}

Navigation.propTypes = {
  counterPage: PropTypes.number,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  getResource: PropTypes.func,
}
