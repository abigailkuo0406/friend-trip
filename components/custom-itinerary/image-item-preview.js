import {useEffect,useState} from 'react'
import Image from 'next/image'
import styles from './create-task.module.css'
import { TbPhotoPlus } from 'react-icons/tb'

export default function ImageItemPpreview({ setFiles }) {
   
    //選擇的檔案
    const [selectedFile,setSelectedFile]=useState(null)
    //是否有檔案被挑選
    const [isFilePicked,setIsFilePicked]=useState(false)
    //預覽圖片
    const [previewUrl, setPreviewUrl] = useState('');
    
    //當選擇檔案更動時建立預覽圖
    useEffect(() => {
      if (!selectedFile) {
        setPreviewUrl('');
        return;
      }
  
      const reader = new FileReader()
      reader.onload = () => {
        setPreviewUrl(reader.result)
      };
      reader.readAsDataURL(selectedFile)
    }, [selectedFile])

  


    const changeHandler=(e)=>{
        const file=e.target.files[0]
        if (file){
            setIsFilePicked(true)
            setSelectedFile(file)
            setFiles(file)
        }else{
            setIsFilePicked(false)
            setSelectedFile(null)
            setFiles(null,fid)
            setPreviewUrl('')
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
              <img src={previewUrl} className={styles.uploaderImg} alt="..." />
            </div>
          </label>
        </div>
    </div>
    </>
  )
}
