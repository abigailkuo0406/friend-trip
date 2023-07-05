// components/layout/admin-layout.js
import Navbar from './navbar'
import Footer from './footer'
import Sidebar from './sidebar'

export default function AdminLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <main className="container">
          <div class="row g-5">
            <div class="col-md-4">
              <Sidebar />
            </div>
            <div class="col-md-8">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
