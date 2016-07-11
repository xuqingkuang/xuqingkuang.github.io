import { GET_NEXT_TITLE } from '../constants/titles'

export const getNextTitle = (title) => {
  return {
    type: GET_NEXT_TITLE,
    title: title
  }
}
