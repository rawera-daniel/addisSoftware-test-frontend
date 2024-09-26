import React, { useState } from 'react'
import Button from '../../ui/Button'
import CreateSongForm from './CreateSongForm'
import styled from '@emotion/styled'
import Modal from '../../ui/Modal'

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`

function Addsong() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <>
      <Button position="center" onClick={() => setIsOpenModal((show) => !show)}>
        Add new songs
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateSongForm onClose={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  )
}

export default Addsong
