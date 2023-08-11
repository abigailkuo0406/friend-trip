// components/layout/admin-layout.js
import Footer from './footer'
import SidebarProduct from '@/components/common/sidebar/sidebar-product'
import Navbar from '@/components/common/navbar/navbar'
import { AuthContextProvider } from '@/context/AuthContext'
import { SearchContextProvider } from '@/context/SearchContext'


export default function ProductPageLayout({ children }) {
  return (
    <>
      <AuthContextProvider>
      <SearchContextProvider>
        <div>
          <Navbar />
          <main className="container">
            <div className="row g-5 main-background">
              <div id="Sidebar" className="col-md-3">
                <SidebarProduct />
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
