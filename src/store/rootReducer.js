import {combineReducers, createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'

import myReducer, {
    initialState as myReducerInitState,
    MY_REDUCER
} from '../reducers/myReducer'



const rootReducer = combineReducers({
   myReducer

})

const initAppStore = {
    myReducer:   myReducerInitState
}

export const initStatesMap = new Map([
        [MY_REDUCER, myReducerInitState]
])

export {
    MY_REDUCER
}

export default rootReducer

export function createInitAppStore () {
    return createStore(rootReducer, initAppStore, applyMiddleware(...[promiseMiddleware, thunk]))
}