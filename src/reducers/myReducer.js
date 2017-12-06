import * as actions from '../actions/actionsConsts'

export const initialState = {

      data :{}

}
export const MY_REDUCER = 'myReducer'

export default function myReducer (state = initialState, action) {
  switch(action.type) {
    case actions.SAVE_CHANGES:
       console.log("save to server" , action.data)
       return {...state,data :action.data}
    default:
      return state
  }
}

