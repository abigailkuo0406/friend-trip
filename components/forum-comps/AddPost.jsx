import styles from './AddPost.module.css'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'

const AddPost = () => {
  const { auth } = useContext(AuthContext) //???可以取得登入者的 member_id 嗎???
  console.log(auth.member_id)
  const router = useRouter()
  const [article, setArticle] = useState({
    content: '',
  })
  // 👇 for img preview
  const [selectedImage, setSelectedImage] = useState(null)
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
          <div className={`h4 ${styles.fontStyle1}`}>文章內容</div>
          <textarea
            className="form-control"
            placeholder="在此輸入..."
            name="content"
            value={article.content}
            onChange={handleChange}
          ></textarea>
          <label className={`custom-file-upload p-2 ${styles.fontStyle1}`}>
            <i className="fa fa-cloud-upload"></i> 選擇圖片
            <input type="file" name="avatar" onChange={handleImageChange} />
          </label>
          {selectedImage && (
            <>
              <p>文章圖片預覽:</p>
              <img src={selectedImage} className="img-fluid" alt="previewImg" />
            </>
          )}
          <input
            className={`btn h4 mt-4 mx-auto ${styles.inputButton}`}
            type="submit"
            value="上傳文章"
          />
        </div>
      </form>
    </>
  )
}

export default AddPost
