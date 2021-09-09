import {combineReducers, createStore, applyMiddleware} from "redux";
import {mainReducer} from "./mainReducer";
import thunk from "redux-thunk";
import {createBrowserHistory} from 'history'

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    main: mainReducer,
    route: history
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
