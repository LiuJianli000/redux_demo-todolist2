  
/* eslint-disable require-yield */
import { takeEvery, put } from 'redux-saga/effects'
import { GET_LIST, GET_MY_LIST } from './actionTypes'
import axios from 'axios'

function* mySagas() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  const res = yield axios.get('https://www.fastmock.site/mock/e6514194ff79c9dbcf5d721d3dc7b5d1/todo-list/get-list')
  
  yield put({
    type: GET_LIST,
    list: res.data
  })
}

export default mySagas