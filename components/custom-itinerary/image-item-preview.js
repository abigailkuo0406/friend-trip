import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './create-task.module.css'
import { TbPhotoPlus } from 'react-icons/tb'

export default function ImageItemPpreview(file, setFiles) {
  // 選擇的檔案
  const [selectedFile, setSelectedFile] = useState(null)
  // 是否有檔案被挑選
  const [isFilePicked, setIsFilePicked] = useState(false)
  // 預覽圖片
  const [preview, setPreview] = useState('')

  // 當選擇檔案更動時建立預覽圖
  useEffect(() => {
    if (!selectedFile) {
      setPreview('')
      return
    }

    //選擇的檔案轉換為可預覽的 URL
    const objectUrl = URL.createObjectURL(selectedFile)
    console.log('objectUrl :', objectUrl)
    setPreview(objectUrl)

    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const changeHandler = (e) => {
    const file = e.target.files[0]
    console.log('file:', file)
    console.log('file:======', file.name)
    console.log('e:', e)
    if (file) {
      setIsFilePicked(true)
      setSelectedFile(file)
    } else {
      setIsFilePicked(false)
      setSelectedFile(null)
    }
  }
  return (
    <>
      <div>
        <div className="d-flex justify-content-center mt-3">
          <label className={styles.uploader}>
            <TbPhotoPlus className={styles.uploaderIcon} />
            <input
              className={styles.uploaderinput}
              type="file"
              name="coverPhoto"
              onChange={changeHandler}
            />
            <div>
              {preview ? (
                <img src={preview} className={styles.uploaderImg} alt="..." />
              ) : (
                <p className="mt-3 mx-2 ">未選擇檔案</p>
              )}
            </div>
          </label>
        </div>
      </div>
    </>
  )
}
