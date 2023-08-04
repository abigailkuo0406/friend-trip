import Navbar from './navbar'
import Footer from './footer'
import { AuthContextProvider } from '@/context/AuthContext'
import { CartContextProvider } from '@/context/CartContext'



export default function DefaultLayout({ children }) {
  return (
    <>
      <AuthContextProvider>
      <CartContextProvider>
        <div className="col-lg-8 mx-auto p-4 py-md-5">
          <Navbar />
          <main className="container">{children}</main>
          <Footer />
        </div>
        </CartContextProvider>
      </AuthContextProvider>
    </>
  )
}
