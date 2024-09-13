import React from 'react'
import styled from '@emotion/styled'
import SongRow from './SongRow'

const Table = styled.div`
  border: 1px solid #e5e7eb;

  font-size: 1.4rem;
  border-radius: 7px;
  overflow: hidden;
`

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  /* background-color:  */
  border-bottom: 1px solid #f3f4f6;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  /* color:  */
  padding: 1.6rem 2.4rem;
`

function SongTable() {
  return (
    <Table role="table">
      <TableHeader role="row">
        <div>#</div>
        <div>Title</div>
        <div>Artist</div>
        <div>Album</div>
        <div>Genre</div>
      </TableHeader>
      <SongRow />
    </Table>
  )
}

export default SongTable
