export const changeCssVariables = theme => {
  const root = document.querySelector(':root')

  const elements = [ 'title', 'bgimage' ]

  elements.forEach(element => {
    root.style.setProperty(
      `--theme-default-${ element }`,
      `var(--theme-${ theme }-${ element })`
    )
  })
}