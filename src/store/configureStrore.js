
 *
 */
import {createStore, applyMiddleware, compose} from 'redux'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const enhancer = compose(
    applyMiddleware(promiseMiddleware),
    applyMiddleware(thunk)
)(createStore)

export default function configureStore (initialState) {
    return enhancer(rootReducer, initialState)
}