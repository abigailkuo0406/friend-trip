import Head from 'next/head'
import React from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import Feed from '@/components/forumComponents/Feed'
import Sidebar from '@/components/forumComponents/Sidebar'
import DefaultLayout from '@/components/layout/default-layout'

export default function Home() {
  return (
    <div>
    <Head>
      <title>Forum</title>
    </Head>
      <main className="flex min-h-screen max-w-7xl mx-auto ">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        {/* Modal */}
        {/* </main> */}
      </main>
    </div>
  )
}

Home.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
