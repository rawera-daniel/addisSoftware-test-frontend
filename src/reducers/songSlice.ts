import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  songs: [],
  loading: false,
  error: null,
}

const songSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    getSongsFetch(state) {
      state.loading = true
      state.error = null
    },
    getSongsSuccess(state, action) {
      state.loading = false
      state.songs = action.payload
    },
    getSongsFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { getSongsFetch, getSongsSuccess, getSongsFailure } =
  songSlice.actions

export default songSlice.reducer
