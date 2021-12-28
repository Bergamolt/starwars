import styles from '../styles.module.css'

export const PeopleItem = ({ name, img, id }) => {
  return (
    <div className={ styles.PeopleItem }>
      <a href="#">
        <img className={styles.PeopleItem__image} src={ img } alt={ name }/>
        <span className={styles.PeopleItem__title}>{ name }</span>
      </a>
    </div>
  )
}
