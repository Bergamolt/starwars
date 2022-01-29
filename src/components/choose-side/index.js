import styles from './styles.module.css'

import { useTheme, THEME_NEUTRAL, THEME_LIGHT, THEME_DARK } from 'context/ThemeContext'

import { ChooseSideItem } from './choose-side-item'
import dark from './img/dark-side.jpg'
import light from './img/light-side.jpg'
import neutral from './img/falcon.jpg'

const images = {
  [THEME_LIGHT]: light,
  [THEME_DARK]: dark,
  [THEME_NEUTRAL]: neutral
}

export const ChooseSide = () => {
  const { changeTheme } = useTheme()

  const onChangeTheme = theme => () => changeTheme(theme)

  return (
    <div className={ styles.ChooseSide }>
      {
        Object.keys(images).map(key => (
          <ChooseSideItem
            key={ key }
            onChangeTheme={ onChangeTheme }
            img={ images[key] }
            name={ key }
          />
        ))
      }
    </div>
  )
}