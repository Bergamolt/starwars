import styles from './styles.module.css'

import img from './img/back.svg'

import { useNavigate } from 'react-router-dom'

export const GoBack = () => {
  const navigate = useNavigate()

  const onGoBack = () => navigate(-1)

  return (
    <a onClick={ onGoBack } href="#" className={ styles.GoBack }>
      <img src={ img } alt="Back" className={ styles.GoBack__img }/>
      <span>Go back</span>
    </a>
  )
}
