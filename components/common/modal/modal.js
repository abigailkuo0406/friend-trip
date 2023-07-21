import { Modal as BootStrapModal } from 'react-bootstrap'
import { useState } from 'react'
import BtnNormal from '../button/btn-normal'

function Modal(props) {
  const { title, show, handleClose } = props

  return (
    <BootStrapModal show={show} onHide={handleClose}>
      <BootStrapModal.Header closeButton>
        <BootStrapModal.Title>{title}</BootStrapModal.Title>
      </BootStrapModal.Header>
      <BootStrapModal.Body>modal body</BootStrapModal.Body>
      <BootStrapModal.Footer>
        <BtnNormal onClick={handleClose} btnText={'Close'} />
        <BtnNormal onClick={handleClose} btnText={'Save Changes'} />
      </BootStrapModal.Footer>
    </BootStrapModal>
  )
}

export default Modal
