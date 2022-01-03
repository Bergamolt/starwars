import { SWAPI_ROOT, PEOPLE, VISUAL_ROOT, VISUAL_PEOPLE, VISUAL_IMG_EXTENTION } from 'constants/api'

const getId = (url, category) => url.replace(SWAPI_ROOT + category, '').replace(/\//g, '')

export const getPeopleId = url => getId(url, PEOPLE)

export const getPeopleImg = id => `${ VISUAL_ROOT }${ VISUAL_PEOPLE }${ id }${ VISUAL_IMG_EXTENTION }`