import React, { useState } from 'react'
import styles from './imgupload.module.css'
import Image from 'next/image'
function App({ resultChange }) {
  const [img, setImg] = useState('')
  const imgUpload = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]))

    async function upload(formData) {
      try {
        const response = await fetch(process.env.API_SERVER + '/preview', {
          method: 'POST',
          body: formData,
        })
        const result = await response.json()
        console.log('Success:', result)
        resultChange(result)
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
      />
      <div className={styles.custom_file_input}>
        <input
          type="file"
          name="preview"
          onChange={imgUpload}
          // onChange={handleChange}
          className={styles.input}
        />
        <Image
          src={'http://localhost:3002/img/upload.png'}
          width={150}
          height={125}
          className={styles.img2}
          alt="upload.png"
        />
      </div>
    </div>
  )
}

export default App
