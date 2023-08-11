import Navbar from './navbar'
import Footer from './footer'
import { AuthContextProvider } from '@/context/AuthContext'
import { SearchContextProvider } from '@/context/SearchContext'



export default function DefaultLayout({ children }) {
  return (
    <>
      <AuthContextProvider>
      <SearchContextProvider>
        <div className="col-lg-8 mx-auto p-4 py-md-5">
          <Navbar />
          <main className="container">{children}</main>
          <Footer />
        </div>
        </SearchContextProvider>
      </AuthContextProvider>
    </>
  )
}
