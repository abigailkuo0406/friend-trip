import React, { useState } from 'react'
import styles from './imgupload.module.css'
import Image from 'next/image'
function App() {
  const [img, setImg] = useState('')
  function handleChange(e) {
    console.log(e.target.files)
    console.log(e.target.files[0].name)
    setImg(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className="d-flex align-items-center ms-5">
      <Image src={img} width={100} height={100} alt="face.png" />
      <input type="file" onChange={handleChange} className={styles.input} />
    </div>
  )
}

export default App
