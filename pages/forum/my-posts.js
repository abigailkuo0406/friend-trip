import AdminLayout from '@/components/layout/admin-layout'
import NavBar from '../../components/forum-comps/NavBar'

export default function MyPosts() {
  return (
    <>
      <NavBar />
    </>
  )
}

MyPosts.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
