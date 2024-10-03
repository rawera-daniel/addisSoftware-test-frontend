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
    addNewSong: (state, _action) => {
      state.isLoading = true
      state.isError = null
    },
    addNewSongSuccess: (state, action) => {
      state.songs = state.songs.concat(action.payload)
      state.isLoading = false
    },
    addNewSongFailure: (state, action) => {
      state.isLoading = false
      state.isError = action.payload
    },
    updateSong: (state) => {
      state.isLoading = true
      state.isError = null
    },
    updateSongSuccess: (state, action) => {
      state.songs = state.songs.map((song) => {
        if (song._id === action.payload._id) {
          return { ...song, ...action.payload }
        }
        return song
      })
      state.isLoading = false
    },
    updateSongFailure: (state, action) => {
      state.isLoading = false
      state.isError = action.payload
    },
  },
})

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  addNewSong,
  addNewSongSuccess,
  addNewSongFailure,
  updateSong,
  updateSongSuccess,
  updateSongFailure,
} = songSlice.actions

export default songSlice.reducer
