import AdminLayout from '@/components/layout/admin-layout'
import Posts from '../../components/forum-comps/Posts'
import NavBar from '../../components/forum-comps/NavBar'
import AddPost from '@/components/forum-comps/AddPost'

export default function ForumHome() {
  return (
    <>
      <NavBar />
      <AddPost />
    </>
  )
}

ForumHome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
