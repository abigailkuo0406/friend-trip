import AdminLayout from '@/components/layout/admin-layout'
import Posts from '../../components/forum-comps/Posts'
import NavBar from '../../components/forum-comps/NavBar'

export default function ForumHome() {
  return (
    <>
      <NavBar />
      <Posts />
    </>
  )
}

ForumHome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
