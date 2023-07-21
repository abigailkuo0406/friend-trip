// components/layout/admin-layout.js
import Footer from './footer'
import Sidebar from '@/components/common/sidebar/sidebar'
import { AuthContextProvider } from '@/context/AuthContext'

export default function SlideLayout({ children }) {
  return (
    <>
      <AuthContextProvider>
        <div>
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
      </AuthContextProvider>
    </>
  )
}
