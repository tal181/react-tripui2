import * as actions from '../actions/actionsConsts'

export const initialState = {

      email: '',
      savedToCloud: false,
      emailEmergency : ''

}
export const MY_REDUCER = 'myReducer'

export default function myReducer (state = initialState, action) {
  switch(action.type) {

    case actions.MY_TEST:
      console.log("in test")
      return {...state, myTest: action.myTest}

    case actions.SAVE_CHANGES:
       console.log("save to server")
       return {...state, savedToCloud: action.savedToCloud}

   case actions.UPDATE_EMAIL_EMERGENCY:
      console.log("UPDATE_EMAIL_EMERGENCY")
      return {...state, savedToCloud: action.savedToCloud,emailEmergency : action.emailEmergency}

    default:
      return state
  }
}

