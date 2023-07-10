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
          <div className="row g-5 main-background">
            <div id="Sidebar" className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
