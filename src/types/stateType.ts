import { Song } from './songType'

export interface State {
  songs: Song[]
  isLoading: boolean
  isError: string | null
}
