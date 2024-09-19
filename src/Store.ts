import { configureStore } from '@reduxjs/toolkit'

import songReducer from './reducers/songSlice'

const store = configureStore({
  reducer: {
    song: songReducer,
  },
})

export default store
