import Image from 'next/image'
import uploadImg from '@/public/face/face15.png'
import styles from './AddPost.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

const AddPost = () => {
  const router = useRouter()
  const [article, setArticle] = useState({
    content: '',
  })

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const forumData = new FormData(e.target)

    fetch('http://localhost:3002/add-a-new-post/add-a-post', {
      method: 'POST',
      body: forumData,
    })
      .then((r) => r.json())
      .then((data) => console.log(data))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-light mt-4 p-5 rounded-5">
          <div className={`h3 ${styles.fontStyle1}`}>新增文章</div>
          <div className={`p-2 ${styles.fontStyle1}`}>* 文章內容</div>
          <textarea
            className="form-control"
            placeholder="今天天氣好晴朗，青山綠水繞身旁，小鳥聲聲唱"
            name="content"
            value={article.content}
            onChange={handleChange}
          ></textarea>
          <label className={`custom-file-upload p-2 ${styles.fontStyle1}`}>
            <i className="fa fa-cloud-upload"></i> 上傳文章圖片
            <input type="file" name="avatar" />
          </label>
          <Image src={uploadImg} alt="postImg" />
          <input
            className="btn btn-primary mt-4 mx-auto"
            type="submit"
            value="確認新增文章"
          />
        </div>
      </form>
    </>
  )
}

export default AddPost
