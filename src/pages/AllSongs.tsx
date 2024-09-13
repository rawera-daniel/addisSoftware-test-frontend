import React from 'react'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import SongTable from '../features/songs/SongTable'

export default function AllSongs() {
  return (
    <>
      <Heading as="h1">All Songs</Heading>

      <Row type="vertical">
        <SongTable />
        <p>Add new songs</p>
      </Row>
    </>
  )
}
