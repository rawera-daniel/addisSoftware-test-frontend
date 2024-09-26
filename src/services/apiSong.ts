import axios from 'axios'
import { Song } from '../types/songType'

const BASE_URL = 'http://127.0.0.1:3000/'

export const fetchSongs = () => axios.get(`${BASE_URL}api/v1/songs`)

export const createSongs = (data: Song) =>
  axios.post(`${BASE_URL}api/v1/songs`, data)
