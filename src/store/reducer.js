import { ADD_ITEM, CHANGE_INPUT, DELE_ITEM, GET_LIST } from "./actionTypes"

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
    case DELE_ITEM: {
      const newState = {...state}

      newState.list.splice(action.index, 1)

      return {
        ...state,
        list: newState.list
      }
    }
    case GET_LIST: {
      return {
        ...state,
        list: action.list.data.list
      }
    }
    default:
      return state
  }
}