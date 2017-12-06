import * as actions from '../actions/actionsConsts'

export const initialState = {

      data :{},
      categories : []

}
export const MY_REDUCER = 'myReducer'

export default function myReducer (state = initialState, action) {
  switch(action.type) {
    case actions.SAVE_CHANGES:
       console.log("save to server" , action.data)
       return {...state,data :action.data}
    case actions.RECEIVE_CATEGORIES:
          console.log("get from server" , action.categories)
          return {...state,categories :action.categories}
    default:
      return state
  }
}

