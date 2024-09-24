import { createSlice } from '@reduxjs/toolkit'
import { State } from '../types/stateType'

const initialState: State = {
  songs: [],
  isLoading: false,
  isError: null,
}

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    getSongsFetch(state) {
      state.isLoading = true
      state.isError = null
    },
    getSongsSuccess(state, action) {
      state.isLoading = false
      state.songs = action.payload
    },
    getSongsFailure(state, action) {
      state.isLoading = false
      state.isError = action.payload
    },
  },
})

export const { getSongsFetch, getSongsSuccess, getSongsFailure } =
  songSlice.actions

export default songSlice.reducer
