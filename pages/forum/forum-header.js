import Link from 'next/link'
import AdminLayout from '@/components/layout/admin-layout'

export default function ForumHeader() {
  return (
    <div>
      <Link href="/">所有文章</Link>
      <Link href="/add-post">新增文章</Link>
      <Link href="/forum-my-posts">我發的文</Link>
    </div>
  )
}

ForumHeader.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
