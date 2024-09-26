import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { getSongsFetch } from '../../reducers/songSlice'
import { RootState } from '../../Store'
import Spinner from '../../ui/Spinner'
import Button from '../../ui/Button'

const SongsRow = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 1fr 1fr 0.5fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  font-weight: 500;

  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }
`
const ButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`

function SongRow() {
  const dispatch = useDispatch()
  const songs = useSelector((state: RootState) => state.song.songs)
  const isLoading = useSelector((state: RootState) => state.song.isLoading)
  const isError = useSelector((state: RootState) => state.song.isError)

  useEffect(() => {
    dispatch(getSongsFetch())
  }, [dispatch])

  if (isLoading) return <Spinner />

  return (
    <section>
      {songs.map((song, index) => (
        <SongsRow key={song.title}>
          <div>{index + 1}</div>
          <div>{song.title}</div>
          <div>{song.artist}</div>
          <div>{song.album}</div>
          <div>{song.genre}</div>
          <ButtonStyle>
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
          </ButtonStyle>
        </SongsRow>
      ))}
    </section>
  )
}

export default SongRow
