import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000/'

export const fetchSongs = () => axios.get(`${BASE_URL}api/v1/songs`)
