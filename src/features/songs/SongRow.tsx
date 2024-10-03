import React, { useState } from 'react'
import styled from '@emotion/styled'

import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
import CreateSongForm from './CreateSongForm'
import { Song } from '../../types/songType'

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

type songRowProps = {
  song: Song
  index: number
}

function SongRow({ song, index }: songRowProps) {
  const [modalMode, setModalMode] = useState<'edit' | 'create'>('create')
  const { title, artist, album, genre } = song

  const [showForm, setShowForm] = useState(false)

  const handleOpen = () => {
    setShowForm((show) => !show)

    setModalMode('edit')
  }

  const handleClose = () => {
    setShowForm(false)
  }

  return (
    <section>
      <SongsRow>
        <div>{index + 1}</div>
        <div>{title}</div>
        <div>{artist}</div>
        <div>{album}</div>
        <div>{genre}</div>
        <ButtonStyle>
          <Button size="small" onClick={handleOpen}>
            Edit
          </Button>
          {showForm && (
            <Modal onHandleClose={handleClose}>
              <CreateSongForm modalMode={modalMode} songToEdit={song} />
            </Modal>
          )}
          <Button size="small">Delete</Button>
        </ButtonStyle>
      </SongsRow>
    </section>
  )
}

export default SongRow
