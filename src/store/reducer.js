import { ADD_ITEM, CHANGE_INPUT } from "./actionTypes"

const defaultValue = {
  inputValue: 'Write something...',
  list: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultValue, action) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      const newState = {...state}

      newState.inputValue = action.value
      
      return {
        ...state,
        inputValue: newState.inputValue
      }
    }
    case ADD_ITEM: {
      const newState = {...state}

      newState.list.push(newState.inputValue)

      return {
        ...state,
        list: newState.list,
        inputValue: ''
      }
    }
    default:
      return state
  }
}