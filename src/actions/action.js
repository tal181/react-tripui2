
import * as action from './actionsConsts'
export function getTest (myTest) {
  return {
    type: action.MY_TEST,
    myTest: myTest
  }
}

export function saveChanges (savedToCloud) {
  return {
    type: action.SAVE_CHANGES,
    savedToCloud: savedToCloud
  }
}

export function updateEmailEmergency (emailEmergency,savedToCloud) {
  return {
    type: action.UPDATE_EMAIL_EMERGENCY,
    emailEmergency: emailEmergency,
    savedToCloud:savedToCloud
  }
}

