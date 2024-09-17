import React, { useState } from 'react'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import SongTable from '../features/songs/SongTable'
import Button from '../ui/Button'
import CreateSongForm from '../features/songs/CreateSongForm'
import Addsong from '../features/songs/Addsong'

export default function AllSongs() {
  // const [showForm, setShowForm] = useState(false)
  return (
    <>
      <Heading as="h1">All Songs</Heading>

      <Row type="vertical">
        <SongTable />

        <Addsong />
      </Row>
    </>
  )
}
