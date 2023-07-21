// components/layout/admin-layout.js
import Navbar from './navbar'
import Footer from './footer'

export default function LoginLayout({ children }) {
  return (
    <>
      <div>
        <main className="container">
          <div class="row g-5 main-background d-flex justify-content-center">
            <div class="col-md-9">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
