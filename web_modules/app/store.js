import {
  applyMiddleware,
  combineReducers,
} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createStore from "phenomic/lib/redux/createStore"
import createSagaMiddleware from "redux-saga"
import * as phenomicReducers from "phenomic/lib/redux/modules" // eslint-disable-line
import rootSaga, {
  eventsReducer,
} from "meetup-data"

const sagaMiddlware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    ...phenomicReducers,
    events: eventsReducer,
  }),
  composeWithDevTools(
    applyMiddleware(sagaMiddlware),
  ),
  { ...(typeof window !== "undefined") && window.__INITIAL_STATE__ },
)

// webpack hot loading
if (module.hot) {
  // enable hot module replacement for reducers
  module.hot.accept([
    // "phenomic/lib/redux/modules",
    // will not be updated since it's a lib :)
    // but will still needs to be required

    // hot load your reducers
    "meetup-data",
  ], () => {
    const updatedReducer = combineReducers({
      // we still need to combine all reducers
      ...require("phenomic/lib/redux/modules"),
      ...require("meetup-data").eventsReducer,
    })

    store.replaceReducer(updatedReducer)
  })
}

sagaMiddlware.run(rootSaga)

export default store
