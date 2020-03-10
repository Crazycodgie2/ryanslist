import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_CURRENT = "cats/GET_CURRENT"

const initialState = {
  current: ""
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

function getCurrent(slug) {
  return dispatch => {
    axios.get("/api/category/" + slug).then(resp => {
      dispatch({
        type: GET_CURRENT,
        payload: resp.data
      })
    })
  }
}

export function useExample() {
  const dispatch = useDispatch()
  const foo = useSelector(appState => appState.exampleState.foo)
  const get = () => dispatch(getExample())

  return { getCurrent }
}
