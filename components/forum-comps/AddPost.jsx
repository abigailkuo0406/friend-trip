import Image from 'next/image'
import uploadImg from '@/public/face/face15.png'
import styles from './AddPost.module.css'
// import BtnNormal from '../common/button/btn-normal'
import Link from 'next/link'
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

  // const handlePic=(e)=>{
  //   e.preventDefault()

  //   fetch('http://localhost:3002/add-a-new-post/add-a-post', {
  //       method: 'POST',
  //       body: JSON.stringify(target.value),
  //       headers: { 'Content-Type': 'application/json' },
  //     })
  //       .then((r) => r.json())
  //       .then((data) => console.log(data))

  //     router.push('/forum')
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    const forumData = new FormData(e.target)
    //forumData.append('content', article.content)
    // const pictureUpload = (e) => {
    //   e.preventDefault()
    //   const [selectedFile, setSelectedFile] = useState({})
    //   const handleFileChange = (e) => {
    //     setSelectedFile(e.target.files[0])
    //   }

    //   const handleUpload = async () => {
    //     if (!selectedFile) return

    //     const formData = new FormData()
    //     formData.append('avatar', selectedFile) // 'file' should match the field name expected by the server
    //     formData.append('avatar', selectedFile)

    //     try {
    //       const response = await fetch(
    //         'http://localhost:3002/add-a-new-post/add-a-post',
    //         {
    //           method: 'POST',
    //           body: formData,
    //         }
    //       )

    //       if (response.ok) {
    //         console.log('Picture uploaded successfully!')
    //         // Do something with the success response
    //       } else {
    //         console.log('Failed to upload picture.')
    //         // Handle the error response
    //       }
    //     } catch (error) {
    //       console.log('Error occured while uploading picture:', error)
    //     }
    //   }
    // }

    fetch('http://localhost:3002/add-a-new-post/add-a-post', {
      method: 'POST',
      body: forumData,
      // body: JSON.stringify({ content: article.content }),
      // headers: { 'Content-Type': 'application/json' },
    })
      .then((r) => r.json())
      .then((data) => console.log(data))

    // router.push('/forum')
    // ========
    // SELECT * FROM posts INNER JOIN media_attachments on posts.post_id = media_attachments.post_id INNER JOIN member on posts.member_id = member.member_id  ORDER BY `posts`.`created_at` DESC
    // ========
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
          {/* <Link href="/forum"> */}
          <input
            className="btn btn-primary mt-4 mx-auto"
            type="submit"
            value="確認新增文章"
          />
          {/* </Link> */}
        </div>
      </form>
    </>
  )
}

export default AddPost
