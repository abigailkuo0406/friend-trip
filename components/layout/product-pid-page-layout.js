// components/layout/admin-layout.js
import Footer from './footer'
import SidebarProductPid from '@/components/common/sidebar/sidebar-product-pid'
import Navbar from '@/components/common/navbar/navbar'
import { AuthContextProvider } from '@/context/AuthContext'
import { SearchContextProvider } from '@/context/SearchContext'


export default function ProductPidPageLayout({ children }) {
  return (
    <>
      <AuthContextProvider>
      <SearchContextProvider>
        <div>
          <Navbar />
          <main className="container">
            <div className="row g-5 main-background">
              <div id="Sidebar" className="col-md-3 sidebar-product-pid-layout">
                <SidebarProductPid />
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
