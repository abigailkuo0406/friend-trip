import AdminLayout from '@/components/layout/admin-layout'
import NavBar from '../../components/forum-comps/NavBar'

export default function AddPost() {
  return (
    <>
      <NavBar />
    </>
  )
}

AddPost.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
