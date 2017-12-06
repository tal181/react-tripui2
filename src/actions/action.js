
import * as action from './actionsConsts'
import {failure, post, put, remove, get,success} from '../restUtils'
import {REGISTER_ROUTERS} from '../routersConst'
let sprintf = require('sprintf-js').sprintf
export function saveChanges (data) {
  return {
    type: action.SAVE_CHANGES,
    data : data
  }
}


export function receiveCategories (categories) {
  return {
    type: action.RECEIVE_CATEGORIES,
    categories : categories
  }
}
//[
//                                 { value: 'sports', label: 'Sports' },
//                                 { value: 'nightLife', label: 'Night life' },
//                               ]
export function fetchCategories () {
  return (dispatch: () => void) => {

    let url = sprintf(REGISTER_ROUTERS.FETCH_CATEGORIES_DATA)
    return get(url)
      .then(success)
      .then((categories) => {
        dispatch(receiveCategories(categories))
      })
      .catch((error) => {
        console.log("error" ,error)
      })
      .then(() => { // finally / always

      })
  }
}



