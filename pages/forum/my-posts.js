import AdminLayout from '@/components/layout/admin-layout'
import Posts from '@/components/forum-comps/Posts'
import NavBar from '@/components/forum-comps/NavBar'
import { useState, useEffect } from 'react'

export default function ForumHome() {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  useEffect(() => {
    // API串接，如果不加 method: 'GET', 也沒關係，那是 default value
    fetch('http://localhost:3002/show-my-posts', {
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
      <Posts posts={posts} comments={comments} />
    </>
  )
}

ForumHome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
