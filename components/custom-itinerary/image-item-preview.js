import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './create-task.module.css'
import { TbPhotoPlus } from 'react-icons/tb'

export default function ImageItemPpreview(file, setFiles) {
  // const [img, setImg] = useState(null)

  // const onChange = (e) => {
  //   const file = e.target.files[0]
  //   const fileReader = new FileReader()
  //   fileReader.addEventListener("load", fileLoad);
  //   fileReader.readAsDataURL(file);
  // };

  // const fileLoad = (e) => {
  //   setImg(e.target.result);
  // };

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

    const objectUrl = URL.createObjectURL(selectedFile)
    console.log('objectUrl :', objectUrl)
    setPreview(objectUrl)

    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const changeHandler = (e) => {
    const file = e.target.files[0]

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
        <label className={styles.label}>旅程封面圖片</label>
        <div className="d-flex justify-content-center mt-3">
          <label className={styles.uploader}>
            <TbPhotoPlus className={styles.uploaderIcon} />
            <input
              className={styles.uploaderinput}
              type="file"
              name="file"
              onChange={changeHandler}
            />

            <div>
              {/* <input type="file"  
          onChange={onChange}></input>
          <img src={img} style={{width:400,height:400}} /> */}

              <img src={preview} className={styles.uploaderImg} alt="..." />
              {/* {onPreview ? (
                <Image
                  src={preview}
                  className={styles.uploaderImg}
                  alt="..."
                  width={200} height={200} 
              
                />
              ) : (
                <p>尚未選擇圖片</p>
              )} */}
            </div>
          </label>
        </div>
      </div>
    </>
  )
}
