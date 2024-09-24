// fetchUserSaga
import { Effect, call, put, takeEvery } from 'redux-saga/effects'
import { fetchSongs } from '../services/apiSong'
import { getSongsSuccess } from '../reducers/songSlice'
import { Song } from '../types/songType'

interface SongsResponse {
  data: {
    songs: Song[]
  }
}

function* fetchSongSaga(): Generator<Effect, void, SongsResponse> {
  const songs = yield call(fetchSongs)

  yield put(getSongsSuccess(songs.data.songs))
}

function* songSaga() {
  yield takeEvery('song/getSongsFetch', fetchSongSaga)
}

export default songSaga
