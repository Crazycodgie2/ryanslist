import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET = "cats/GET"
const GET_CURRENT = "cats/GET_CURRENT"

const initialState = {
  current: "",
  cats: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return { ...state, cats: action.payload }
    case GET_CURRENT:
      return {
        ...state,
        current: action.payload.category,
        posts: action.payload.posts
      }
    default:
      return state
  }
}

function getCategories() {
  return dispatch => {
    axios.get("/api/categories").then(resp => {
      dispatch({
        type: GET,
        payload: resp.data
      })
    })
  }
}

export function useCats() {
  const dispatch = useDispatch()
  const cats = useSelector(appState => appState.catState.cats)
  const get = () => dispatch(getCategories())

  return { cats, get }
}
