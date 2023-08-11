import AdminLayout from '@/components/layout/admin-layout'
import Posts from '@/components/forum-comps/Posts'
import NavBar from '@/components/forum-comps/NavBar'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '@/context/AuthContext'
import EmptyStateMessage from '@/components/forum-comps/EmptyStateMessage'

export default function ForumHome() {
  const { auth } = useContext(AuthContext)
  const member_id = auth.member_id

  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  useEffect(() => {
    // API串接，如果不加 method: 'GET', 也沒關係，那是 default value
    fetch(`http://localhost:3002/show-my-posts?member_id=${member_id}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((d) => {
        console.log('111', d.rows)
        setPosts(d.rows)
        setComments(d.comments)
        console.log('eddie', d.rows.file_url)
      })
  }, [])

  if (!posts) return <p>loading</p>
  return (
    <>
      <NavBar />
      <input name="member_id" defaultValue={auth.member_id} hidden />
      {/* 如果登入者尚未發文過，顯示 “您還沒有發過文，新增文章吧！” */}
      {posts.length === 0 ? (
        <EmptyStateMessage />
      ) : (
        <Posts posts={posts} comments={comments} setPosts={setPosts} />
      )}
    </>
  )
}

ForumHome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
