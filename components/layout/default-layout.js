import Navbar from './navbar'
import Footer from './footer'
import SideArea from './side-area'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <SideArea/>
      <main>{children}</main>
      <Footer />
    </>
  )
}
