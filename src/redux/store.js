import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer.js";
import logger from "redux-logger";
import { batchedSubscribe } from "redux-batched-subscribe";
import _ from "lodash";

const debounceNotify = _.debounce((notify) => notify());

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [batchedSubscribe(debounceNotify)],
});

export default store;
