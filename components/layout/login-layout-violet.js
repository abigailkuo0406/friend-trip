// components/layout/admin-layout.js
import Footer from './footer'
import styles from '@/components/login/login.module.css'
import { AuthContextProvider } from '@/context/AuthContext'
import { SearchContextProvider } from '@/context/SearchContext'

export default function LoginLayout({ children }) {
  return (
    <>
      <AuthContextProvider>
      <SearchContextProvider>
      <div>
        <main className="container">
          <div
            class={`row g-5 d-flex justify-content-center ${styles.mainbackground}`}
          >
            <div class="col-md-9">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
      </SearchContextProvider>
      </AuthContextProvider>
      </>
  )
}
