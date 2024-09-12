import React from 'react'
import Heading from '../ui/Heading'
import Row from '../ui/Row'

export default function AllSongs() {
  return (
    <>
      <Heading as="h1">All Songs</Heading>

      <Row type="vertical">
        <p>Song Table</p>
        <p>Add new songs</p>
      </Row>
    </>
  )
}
