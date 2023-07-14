import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import DefaultLayout from '@/components/layout/default-layout'


export default function Home() {
  return (
    <DefaultLayout>
    <main className='flex min-h-screen max-w-7xl mx-auto '>
    {/* Sidebar */}
    <Sidebar/>
    {/* Feed */}
    <Feed/>
    {/* Widgets */}
    {/* Modal */}
    </main>
    </DefaultLayout>
    
  )
}
