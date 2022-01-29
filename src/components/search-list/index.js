import styles from './styles.module.css'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const SearchList = ({ people }) => (
  <ul className={ styles.SearchList }>
    {
      people.map(({ id, name, img }) => (
        <li key={id}>
          <Link to={ `/people/${ id }` }>
            <img src={ img }/>
            <span>{ name }</span>
          </Link>
        </li>
      ))
    }
  </ul>
)

SearchList.propTypes = {
  people: PropTypes.array
}
