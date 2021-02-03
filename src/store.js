import React from 'react';
import thunk from "redux-thunk";
import PostsReducer from './Pedux/Reducers/PostReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore,applyMiddleware, combineReducers } from "redux";

const reducer=combineReducers({
  PostsReducer,
})

const store =createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;