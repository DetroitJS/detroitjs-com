import {
  takeEvery,
  takeLatest,
  delay,
} from "redux-saga"
import {
  call,
  put,
} from "redux-saga/effects"

import API from "./api"

export const FETCH_REQUEST = "meetup/events/FETCH_REQUESTED"
export const FETCH_SUCCEEDED = "meetup/events/FETCH_SUCCEEDED"
export const FETCH_PROCESSING = "meetup/events/FETCH_PROCESSING"
export const FETCH_FAILED = "meetup/events/FETCH_FAILED"

/*
 * export function events(state = [], action) {
 *   switch (action.type) {
 *   case REQUEST:
 *     return [
 *       ...state,
 *       {
 *         text: action.type,
 *       },
 *     ]
 *   default:
 *     return state
 *   }
 * }
 */

// worker Saga: will be fired on FETCH_REQUEST actions
function* fetchEvents() {
  try {
    const events = yield call(API.scrapeEvents)
    if (events.status !== "SUCCEEDED") {
      yield put({
        type: FETCH_PROCESSING,
        payload: {
          detailsUrl: events.detailsUrl,
          resultsUrl: events.resultsUrl,
        },
      })
    }
    else {
      yield put({ type: FETCH_SUCCEEDED, events })
    }
  }
  catch (e) {
    console.error(e)
    yield put({ type: FETCH_FAILED, message: e.message })
  }
}

function* waitForResults({ payload }) {
  try {
    if (payload.status !== "SUCCEEDED") {
      yield call(delay, 250)
      const events = yield call(API.getEvents, payload.detailsUrl)
      yield put({
        type: FETCH_PROCESSING,
        payload: {
          status: events.status,
          detailsUrl: events.detailsUrl,
          resultsUrl: events.resultsUrl,
        },
      })
    }
    else {
      const events = yield call(API.getEvents, payload.resultsUrl)
      yield put({
        type: FETCH_SUCCEEDED,
        payload: events.filter(r => r.pageFunctionResult),
      })
    }
  }
  catch (e) {
    console.error(e)
    yield put({ type: FETCH_FAILED, message: e.message })
  }
  console.groupEnd()
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "EVENTS_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* getEvents() {
  yield* takeEvery(FETCH_REQUEST, fetchEvents)
}

function* processEvents() {
  yield* takeLatest(FETCH_PROCESSING, waitForResults)
}

export default function* rootSaga() {
  yield [
    processEvents(),
    getEvents(),
  ]
}

export function eventsReducer(state = [], { type, payload }) {
  switch (type) {
  case FETCH_SUCCEEDED:
    return [
      ...state,
      ...payload.filter(ev => ev.pageFunctionResult.length)
        .map(ev => ev.pageFunctionResult[0]),
    ]
  default:
    return state
  }
}
