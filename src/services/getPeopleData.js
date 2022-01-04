import { SWAPI_ROOT, PEOPLE, PEOPLE_PAGE, VISUAL_ROOT, VISUAL_PEOPLE, VISUAL_IMG_EXTENTION } from 'constants/api'

const getId = (url, category) => url.replace(SWAPI_ROOT + category, '').replace(/\//g, '')

export const getPeopleId = url => getId(url, PEOPLE)

export const getPeopleImg = id => `${ VISUAL_ROOT }${ VISUAL_PEOPLE }${ id }${ VISUAL_IMG_EXTENTION }`

export const getPeoplePageId = url => {
  const pos = url.lastIndexOf(PEOPLE_PAGE)

  return +url.slice(pos + PEOPLE_PAGE.length, url.length)
}