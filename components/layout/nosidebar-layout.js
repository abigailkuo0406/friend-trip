// components/layout/admin-layout.js
import Footer from './footer'
import Sidebar from '@/components/common/sidebar/sidebar'
import Navbar from '@/components/common/navbar/navbar'
import { AuthContextProvider } from '@/context/AuthContext'

export default function NoSidebarLayout({ children, page }) {
  return (
    <>
      <AuthContextProvider>
        <div>
          <Navbar />
          <main className="container">
            <div className="row g-5 main-background">
              <div className="col-md-12">{children}</div>
            </div>
          </main>
          <Footer />
        </div>
      </AuthContextProvider>
    </>
  )
}
