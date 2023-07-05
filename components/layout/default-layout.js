import Navbar from './navbar'
import Footer from './footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className="col-lg-8 mx-auto p-4 py-md-5">
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </div>
    </>
  )
}
