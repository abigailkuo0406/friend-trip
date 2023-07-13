// components/layout/admin-layout.js
import Navbar from './navbar'
import Footer from './footer'
import Sidebar from '@/components/common/sidebar/sidebar'

export default function AdminLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <main className="container">
          <div class="row g-5 main-background">
            <div id="Sidebar" class="col-md-3">
              <Sidebar />
            </div>
            <div class="col-md-9">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
