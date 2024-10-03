// fetchUserSaga
import { Effect, call, put, takeEvery } from 'redux-saga/effects'
import { fetchSongs, createSongs, updateSongs } from '../services/apiSong'
import {
  getSongsSuccess,
  addNewSongSuccess,
  updateSongSuccess,
} from '../reducers/songSlice'
import { AddAction } from '../types/actionTyp'
import { Song } from '../types/songType'

interface SongsResponse {
  data: {
    songs: Song[]
  }
}
interface SongsResponses {
  data: {
    newSong: Song[]
  }
}

interface UpdateSongsResponse {
  data: {
    song: Song
  }
}

function* fetchSongSaga(): Generator<Effect, void, SongsResponse> {
  const songs = yield call(fetchSongs)

  yield put(getSongsSuccess(songs.data.songs))
}

function* addNewSongSaga(
  action: AddAction,
): Generator<Effect, void, SongsResponses> {
  // console.log('API', createSongs(action.payload))
  const newSongs = yield call(createSongs, action.payload)

  yield put(addNewSongSuccess(newSongs.data.newSong))
}

function* updateSongSaga(
  action: AddAction,
): Generator<Effect, void, UpdateSongsResponse> {
  const updateSong = yield call(updateSongs, action.payload)

  console.log('Updating', updateSong)

  yield put(updateSongSuccess(updateSong.data.song))
}

function* songSaga() {
  yield takeEvery('song/getSongsFetch', fetchSongSaga)
  yield takeEvery('song/addNewSong', addNewSongSaga)
  yield takeEvery('song/updateSong', updateSongSaga)
}

export default songSaga
