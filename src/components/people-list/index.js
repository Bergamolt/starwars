import styles from './styles.module.css'

import { PeopleItem } from './people-item'
import PropTypes from 'prop-types'

export const PeopleList = ({ people }) => {
  return (
    <div className={ styles.People }>
      { people && people.map(({ id, img, name }) => (
        <PeopleItem key={ id } id={ id } img={ img } name={ name }/>
      )) }
    </div>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array
}
