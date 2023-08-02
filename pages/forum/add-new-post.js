import AdminLayout from '@/components/layout/admin-layout'
import NavBar from '../../components/forum-comps/NavBar'
import AddPost from '@/components/forum-comps/AddPost'

// import { useState, useEffect } from 'react'

export default function AddNewPost() {
  // const [posts, setPosts] = useState()
  // useEffect(() => {
  //   fetch('http://localhost:3002/add-a-new-post', {
  //     method: 'POST',
  //   })
  //     .then((r) => r.json())
  //     .then((d) => {
  //       console.log('write to', d.rows)
  //       setPosts(d.rows)
  //     })
  // }, [])
  return (
    <>
      <NavBar />
      <AddPost />
    </>
  )
}

AddNewPost.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
