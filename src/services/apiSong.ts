import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const fetchSongs = () => axios.get(`${baseUrl}/api/v1/songs`)
