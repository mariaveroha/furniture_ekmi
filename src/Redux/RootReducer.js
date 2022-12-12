import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import CatalogReducer from "./CatalogReducer";
import PaginationReducer from "./PaginationReducer";

export const RootReducer = combineReducers( {
catalog: CatalogReducer,
pagination : PaginationReducer
})

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))