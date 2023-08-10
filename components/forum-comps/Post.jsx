import HeaderOfThePost from './HeaderOfThePost'
import ImgForThePost from './ImgForThePost'
import ArticleOfPost from './ArticleOfPost'
import React, { useState } from 'react'
import axios from 'axios'
import ShowComments from './ShowComments'
import AddComment from './AddComment'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'
import Swal from 'sweetalert2'


export default function Post({
  post_id,
  avatarOfPostAuthor,
  authorOfThePost,
  dateOfPublishOfPost,
  imgOfPost,
  articleOfPost,
  comments,
  postMember_id,
}) {
  const { auth } = useContext(AuthContext)
  // 👇 判斷是否登入，兩個驚歎號作用為強制轉換數字為布林值
  const isLoggedIn = !!auth.member_id
  // ☝️ 判斷是否登入
  const [deletemodalStatus, setDeletemodalStatus] = useState('none')
  function deletePost() {
    axios
      .post('http://localhost:3002/delete-a-post-of-mine/delete-this-post', {
        post_id: post_id,
        postMember_id: auth.member_id,
      })
      .then((r) => {
        // console.log(r.message)
        console.log(r.data.message)
        if (r.data.message == 'deleted') {
          // alert('資料成功刪除')
          Swal.fire({
            width:400,
            title:'所選貼文已刪除',
            text:'刪除完成',
            icon:'sucess',
            iconColor:'#FABCBF',
            color:'#674c87',
            confirmButtonColor:'#674c87',
            showConfirmButton:true
          })
        }
      })
  }
  return (
    <div className="bg-light mt-4 p-5 rounded-5">
      <HeaderOfThePost
        avatarOfPostAuthor={avatarOfPostAuthor}
        authorOfThePost={authorOfThePost}
        dateOfPublishOfPost={dateOfPublishOfPost}
        isLoggedIn={auth.member_id}
        postMember_id={postMember_id}
        post_id={post_id}
        setDeletemodalStatus={setDeletemodalStatus}
      />
      {/* 👇 要跟組員使用相同的彈跳視窗 */}
      <div style={{ display: deletemodalStatus }}>
        <h3>do you wnat to delete this post?</h3>
        <input
          type="button"
          value={'確定刪除'}
          onClick={() => {
            deletePost()
          }}
        />
        <input
          type="button"
          value={'取消刪除'}
          onClick={() => {
            setDeletemodalStatus('none')
          }}
        />
      </div>
      {/* ☝️ 要跟組員使用相同的彈跳視窗 */}
      <ImgForThePost imgSrc={imgOfPost} className="my-md-4" />
      <ArticleOfPost content={articleOfPost} className="my-md-4" />
      <ShowComments comments={comments} post_id={post_id} />
      {isLoggedIn && <AddComment post_id={post_id} comments={comments} />}
    </div>
  )
}
