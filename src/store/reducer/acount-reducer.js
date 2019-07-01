import { CLICK_SAVE_LOGIN, UPDATE_USER } from '../action/actionType'
import axios from 'axios'

var product = {
  amount: [],
  name: "",
  id: 0,
  user: ''
}
export default function (state = product, action) {
  switch (action.type) {
    case CLICK_SAVE_LOGIN:
      return saveClick(state, action)
    case UPDATE_USER:
      return updateUser(state, action)
    default:
      return state
  }
}
function saveClick(state, action) {
  state = {
    ...state,
    name: action.name,
    id: action.id,
    user: action.user
  };
  return state;
}
function updateUser(state, action) {
  const user = {
    email: action.email,
    name: action.name,
    phone: action.phone
  }
  axios.put(`http://5d08a7b5034e5000140106c4.mockapi.io/api/user/${action.id}`, { ...user })

  return state
}
