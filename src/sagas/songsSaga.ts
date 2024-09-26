// fetchUserSaga
import { Effect, call, put, takeEvery } from 'redux-saga/effects'
import { fetchSongs, createSongs } from '../services/apiSong'
import { getSongsSuccess, addNewSongSuccess } from '../reducers/songSlice'
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

function* fetchSongSaga(): Generator<Effect, void, SongsResponse> {
  const songs = yield call(fetchSongs)

  console.log('FetchSong', songs)

  yield put(getSongsSuccess(songs.data.songs))
}

function* addNewSongSaga(
  action: AddAction,
): Generator<Effect, void, SongsResponses> {
  const newSongs = yield call(createSongs, action.payload)

  console.log('NEWSONG', newSongs.data.newSong)

  yield put(addNewSongSuccess(newSongs.data.newSong))
}

function* songSaga() {
  yield takeEvery('song/getSongsFetch', fetchSongSaga)
  yield takeEvery('song/addNewSong', addNewSongSaga)
}

export default songSaga
