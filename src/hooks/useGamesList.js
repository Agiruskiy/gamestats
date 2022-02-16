import {useEffect, useReducer} from "react";

const initialState = {
  inputValue: '',
  gamesList: JSON.parse(localStorage.getItem('gamesList')) || [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_GAME': {
      return {...state, gamesList: [...state.gamesList, action.payload]}
    }
    default:
      return initialState
  }
}

export const useGamesList = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {gamesList} = state
  useEffect(() => {
    localStorage.setItem('gamesList', JSON.stringify(gamesList))
  }, [gamesList])
  return [state, dispatch]
}