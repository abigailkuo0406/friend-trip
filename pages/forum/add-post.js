import AdminLayout from '@/components/layout/admin-layout'
import Link from 'next/link'

export default function AddPost() {
  return (
    <div>
      <div>
        <Link href="/forum">所有文章</Link>
        <Link href="forum/add-post">新增文章</Link>
        <Link href="forum/forum-my-posts">我發的文</Link>
      </div>
      新增文章
    </div>
  )
}

AddPost.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
