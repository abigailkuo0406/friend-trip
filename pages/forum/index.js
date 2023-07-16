import AdminLayout from '@/components/layout/admin-layout'
import Link from 'next/link'
import Head from 'next/head'
import Feed from './forum-comps/Feed'

export default function ForumHome() {
  return (
    <div>
      <Head>
        <title>FriendTrip論壇</title>
      </Head>
      <div>
        <Link href="/forum">所有文章</Link>
        <Link href="forum/add-post">新增文章</Link>
        <Link href="forum/forum-my-posts">我發的文</Link>
      </div>
      {/* Feed 文章區 */}
      <Feed />
      {/* Modal */}
    </div>
  )
}

ForumHome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
