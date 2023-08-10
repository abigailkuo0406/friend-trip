import styles from './AddPost.module.css'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'

const DeleteAPostOfMine = () => {

  const { auth } = useContext(AuthContext) // 第一步(對應下面的 fetch 函數)：auth裡面取得了登入者的信息，之後在node後端的routes檔案夾裡的 add-a-post.js 的第73行裡面填入 req.body.member_id，這個會對應到上面 INSERT INTO 的 `member_id`，這樣就會寫入到 posts裡面的 member_id 欄位
  console.log(auth.member_id)
  const router = useRouter()
  // 👇 判斷是否登入，兩個驚歎號作用為強制轉換數字為布林值
  const isLoggedIn = !!auth.member_id
  // ☝️ 判斷是否登入
  const handleSubmit = (e) => {
    e.preventDefault()
    const forumData = new FormData(e.target)

    fetch('http://localhost:3002/delete-a-post-of-mine/delete-this-post', {
      // 對應上面 const { auth } = useContext(AuthContext) 的第一步
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then((data) => console.log(data))

    router.push('/forum')
  }


  
  }
   
export default DeleteAPostOfMine
