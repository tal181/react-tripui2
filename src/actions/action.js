
import * as action from './actionsConsts'


export function saveChanges (data) {
  return {
    type: action.SAVE_CHANGES,
    data : data
  }
}



