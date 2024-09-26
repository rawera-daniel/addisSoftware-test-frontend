import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import songReducer from './reducers/songSlice'
import modelReducer from './reducers/modelSlice'
import songSaga from './sagas/songsSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    song: songReducer,
    model: modelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(songSaga)

export default store

export type RootState = ReturnType<typeof store.getState>
