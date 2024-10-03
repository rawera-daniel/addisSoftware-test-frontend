import React, { Children, ReactNode, useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { closeModal } from '../reducers/modelSlice'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  z-index: 1000;
  transition: all 0.5s;
`
const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.02);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`

const CancelButton = styled.button`
  background: none;
  border: none;
  padding: 0.8rem;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 500;
  transition: all 0.2s;
  position: absolute;

  top: 25%;
  right: 26%;

  &:hover {
    background-color: #f3f4f6;
  }
`

interface ModalProps {
  children: ReactNode
  onHandleClose: () => void
}

function Modal({ children, onHandleClose }: ModalProps) {
  return (
    <Overlay>
      <ModalStyle>{children}</ModalStyle>
      <CancelButton onClick={onHandleClose}>X</CancelButton>
    </Overlay>
  )
}

export default Modal
