import { useState } from 'react'
import Modal from '@/components/common/modal/modal'

const TestComponent = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <button onClick={handleShow}>show modal</button>
      <Modal title="test title" show={show} handleClose={handleClose} />
      <div>TestComponent</div>
    </>
  )
}

export default TestComponent
