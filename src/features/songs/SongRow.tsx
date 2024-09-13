import React from 'react'
import styled from '@emotion/styled'

type Song = {
  title: string
  artist: string
  album: string
  genre: string
}

const songs: Song[] = [
  {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    album: 'Divide',
    genre: 'Pop',
  },
  {
    title: 'Despacito',
    artist: 'Luis Fonsi',
    album: 'Vida',
    genre: 'Latin',
  },
  {
    title: 'Rolling in the Deep',
    artist: 'Adele',
    album: '21',
    genre: 'Pop',
  },
  {
    title: 'Imagine',
    artist: 'John Lennon',
    album: 'Imagine',
    genre: 'Rock',
  },
  {
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    album: 'Led Zeppelin IV',
    genre: 'reggae',
  },
  {
    title: 'Goota koo',
    artist: 'Hacalu Hundessa',
    album: 'Maal Mallisaa',
    genre: 'Traditional',
  },
]

const SongsRow = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  font-weight: 500;

  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }
`

function SongRow() {
  return (
    <section>
      {songs.map((song, index) => (
        <SongsRow key={song.title}>
          <div>{index + 1}</div>
          <div>{song.title}</div>
          <div>{song.artist}</div>
          <div>{song.album}</div>
          <div>{song.genre}</div>
        </SongsRow>
      ))}
    </section>
  )
}

export default SongRow
