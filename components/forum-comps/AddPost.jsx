import Image from 'next/image'
import uploadImg from '@/public/face/face15.png'
import styles from './AddPost.module.css'
import BtnNormal from '../common/button/btn-normal'
import Link from 'next/link'

function AddPost() {
  return (
    <>
      <div className="bg-light mt-4 p-5 rounded-5">
        <div className={`h3 ${styles.fontStyle1}`}>新增文章</div>
        <div className="">
          <div className={`p-2 ${styles.fontStyle1}`}>* 文章內容</div>
          <textarea
            className="form-control"
            placeholder="今天天氣好晴朗，青山綠水繞身旁，小鳥聲聲唱"
          ></textarea>
        </div>
        <div className="">
          <div className={`p-2 ${styles.fontStyle1}`}>* 上傳照片</div>
          <input type="file" name="" id="" />
        </div>
        <Image src={uploadImg} alt="postImg" />
        <Link href={'/forum'}>
          <BtnNormal />
        </Link>
      </div>
    </>
  )
}

export default AddPost
