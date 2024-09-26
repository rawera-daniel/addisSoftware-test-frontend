import { Song } from './songType'

export type AddAction = {
  type: string
  payload: Song
}
