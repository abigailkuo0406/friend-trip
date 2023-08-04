import Image from 'next/image'
import uploadImg from '@/public/img/forum-img/taidong.jpg'
import styles from './AddPost.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

const AddPost = () => {
  const [selectedImage, setSelectedImage] = useState(null) // for img preview
  const router = useRouter()
  const [article, setArticle] = useState({
    content: '',
  })

  // 👇 for img preview
  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }
  // ☝️ for img preview

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

    router.push('/forum')
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
            <input type="file" name="avatar" onChange={handleImageChange} />
            {/*add onChange attribute for img preview*/}
          </label>
          {selectedImage && (
            <>
              <p>文章圖片預覽:</p>
              <Image
                src={selectedImage}
                width={50}
                height={50}
                alt="previewImg"
                className="img-fluid"
              />
            </>
          )}
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
