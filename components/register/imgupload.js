import React, { useEffect, useState } from 'react'
import styles from './imgupload.module.css'
import Image from 'next/image'
function App({ test1 }) {
  const [img, setImg] = useState('')
  const [resultState, setResultState] = useState()
  function handleChange(e) {
    console.log(e.target.files)
    console.log(e.target.files[0].name)
    setImg(URL.createObjectURL(e.target.files[0]))
  }
  const imgUpload = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]))
    async function upload(formData) {
      try {
        const response = await fetch(process.env.API_SERVER + '/preview', {
          method: 'POST',
          body: formData,
        })
        const result = await response.json()
        setResultState(result)
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
  //  useEffect(() => {
  //   test1(resultState)
  // }, [resultState])

  return (
    <div className={`d-flex align-items-center ms-5 ${styles.container}`}>
      <Image
        src={img}
        width={100}
        height={100}
        className={styles.img}
        alt="face.png"
      />
      <input
        type="file"
        name="preview"
        onChange={imgUpload}
        // onChange={handleChange}
        className={styles.input}
      />
    </div>
  )
}

export default App
