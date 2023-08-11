import AdminLayout from '@/components/layout/admin-layout'
import NavBar from '../../components/forum-comps/NavBar'
import AddPost from '@/components/forum-comps/AddPost'

export default function AddNewPost() {

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
