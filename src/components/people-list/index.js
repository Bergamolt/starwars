import styles from './styles.module.css'

import { PeopleItem } from './people-item'

export const PeopleList = ({ people }) => {
  return (
    <div className={ styles.People }>
      { people && people.map(({ id, img, name }) => (
        <PeopleItem key={ id } id={ id } img={ img } name={ name }/>
      )) }
    </div>
  )
}
