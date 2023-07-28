import AdminLayout from '@/components/layout/admin-layout'
import Posts from '../../components/forum-comps/Posts'
import NavBar from '../../components/forum-comps/NavBar'
import Post from '@/components/forum-comps/Post'
import { useState, useEffect } from 'react'

export default function ForumHome() {
  const [posts, setPosts] = useState()
  useEffect(() => {
    // setKeyword(router.query.keyword || '')
    // const usp = new URLSearchParams(router.query)

    // API串接
    fetch('http://localhost:3002/show-forum-posts', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((d) => {
        console.log('111', d.rows)
        setPosts(d.rows)
        console.log('eddie', d.rows.file_url)
      })
  }, [])

  //  const posts = [
  //    {
  //      id: '1',
  //      authorOfThePost: 'Amber',
  //      isLogginUserAuthorOfThePost: true,
  //      dateOfPublishOfPost: '2023/07/23',
  //      articleOfPost:
  //        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, quis? Adipisci fugiat obcaecati, quas eum animi provident commodi, corrupti, perspiciatis perferendis placeat eos aliquid a soluta earum rem assumenda quibusdam?',
  //      avatarOfPostAuthor:
  //        'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffake-persona.fa9c7bea.png&w=2048&q=75',
  //      imgOfPost:
  //        'https://images.unsplash.com/photo-1643818507403-a3ed10760d16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  //    },
  //    {
  //      id: '2',
  //      authorOfThePost: 'Peter',
  //      isLogginUserAuthorOfThePost: false,
  //      dateOfPublishOfPost: '2023/05/13',
  //      articleOfPost:
  //        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, illum facilis perspiciatis repellendus aut maiores recusandae mollitia vero explicabo possimus ipsa vel ad consequatur laboriosam sequi maxime at praesentium doloribus!',
  //      avatarOfPostAuthor:
  //        'https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048',
  //      imgOfPost:
  //        'https://images.unsplash.com/photo-1643806720662-f9bc01be4e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  //    },
  //  ]
  if (!posts) return <p>loading</p>
  return (
    <>
      <NavBar />
      <Posts posts={posts} />
    </>
  )
}

ForumHome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
