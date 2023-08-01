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
  const imgUpload = (e) => {
    async function upload(formData) {
      try {
        const response = await (process.env.API_SERVER + '/preview',
        {
          method: 'POST',
          body: formData,
        })
        const result = await response.json()
        console.log('Success:', result)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    const formData = new FormData()
    const fileField = document.querySelector('input[type="file"]')
    formData.append('preview', fileField.files[0])
    console.log(formData)
    upload(formData)
  }

  return (
    <div className={`d-flex align-items-center ms-5 ${styles.container}`}>
      <Image
        src={img}
        width={100}
        height={100}
        className={styles.img}
        alt="face.png"
        onChange={handleChange}
      />
      <input
        type="file"
        name="preview"
        onChange={imgUpload}
        className={styles.input}
      />
    </div>
  )
}

export default App
