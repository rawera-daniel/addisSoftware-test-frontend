import axios from 'axios'

const baseUrl = 'http://localhost:3000'

// `${BASE_URL}/cities`

export const fetchSongs = () => axios.get(`${baseUrl}/api/v1/songs`)
