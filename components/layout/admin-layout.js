// components/layout/admin-layout.js
import Footer from './footer'
import Sidebar from '@/components/common/sidebar/sidebar'
import Navbar from '@/components/common/navbar/navbar'
import { AuthContextProvider } from '@/context/AuthContext'
import { SearchContextProvider } from '@/context/SearchContext'

export default function AdminLayout({ children, page }) {
  return (
    <>
      <AuthContextProvider>
      <SearchContextProvider>
        <div>
          <Navbar />
          <main className="container">
            <div className="row g-5 main-background">
              <div id="Sidebar" className="col-md-3">
                <Sidebar />
              </div>
              <div className="col-md-9">{children}</div>
            </div>
          </main>
          <Footer />
        </div>
        </SearchContextProvider>
      </AuthContextProvider>
    </>
  )
}
