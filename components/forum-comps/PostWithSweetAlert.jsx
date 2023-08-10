import HeaderOfThePostWithSweetAlert2 from './HeaderOfThePostWithSweetAlert2'
import ImgForThePost from './ImgForThePost'
import ArticleOfPost from './ArticleOfPost'
import React, { useState } from 'react'
import axios from 'axios'
import ShowComments from './ShowComments'
import AddComment from './AddComment'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'
import Swal from 'sweetalert2'

export default function PostWithSweetAlert({
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
  // const [deletemodalStatus, setDeletemodalStatus] = useState('none')
  function deleteThisPost() {
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
        }
      })
  }
  function handleConfirmClick() {
    console.log('post_id', post_id, 'member_id', isLoggedIn)
    Swal.fire({
      title: '確定刪除嗎？',
      text: 'delete item',
      icon: 'warning',
      showCancleButton: true,
      confirmButtonText: '確定刪除',
      cancelButtonText: '保留文章，不要刪除',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteThisPost()
        Swal.fire('刪除成功', '您的貼文已刪除', 'success')
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('不要刪除', '放心，您的貼文還在 :)', 'error')
      }
    })
  }
  return (
    <div className="bg-light mt-4 p-5 rounded-5">
      <HeaderOfThePostWithSweetAlert2
        avatarOfPostAuthor={avatarOfPostAuthor}
        authorOfThePost={authorOfThePost}
        dateOfPublishOfPost={dateOfPublishOfPost}
      />
      {/* 判斷登入的會員是不是發文者，是的話就顯示垃圾桶符號 */}
      {isLoggedIn == postMember_id ? (
        <div role="presentation" onClick={handleConfirmClick}>
          🗑️
        </div>
      ) : (
        ''
      )}
      <ImgForThePost imgSrc={imgOfPost} className="my-md-4" />
      <ArticleOfPost content={articleOfPost} className="my-md-4" />
      <ShowComments comments={comments} post_id={post_id} />
      {isLoggedIn && <AddComment post_id={post_id} comments={comments} />}
      {/* 👇 要跟組員使用相同的彈跳視窗 */}
      {/* <div style={{ display: deletemodalStatus }}>
        <h3>do you wnat to delete this post?</h3>
        <input
          type="button"
          value={'確定刪除'}
          onClick={() => {
            handleConfirmClick()
          }}
        />
        <input
          type="button"
          value={'取消刪除'}
          onClick={() => {
            setDeletemodalStatus('none')
          }}
        />
      </div> */}
      {/* ☝️ 要跟組員使用相同的彈跳視窗 */}
    </div>
  )
}
